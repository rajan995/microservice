import { Request, Response } from 'express';
import { connectDB } from '../../utility/mongodb_connect';
import { verifyOtpSchema } from './schema';
import { UserModel } from '../../models/user/user.model';
import { getRefreshToken } from '../../utility/jwtToken';

export async function verifyOtpController(req: Request, res: Response) {
    try {
        const body = req.body;
        const { error } = verifyOtpSchema.validate(body);

        if (error) {
            return res.status(400).json({
                message: error.details[0].message
            });
        }

        await connectDB();

        const user = await UserModel.findOne({
            countryCode: body.countryCode,
            phoneNumber: body.phoneNumber,
            otp: body.otp
        });

        if (!user) {
            return res.status(400).json({
                message: 'Invalid OTP or user does not exist'
            });
        }

        const { accessToken, refreshToken}:{accessToken:string, refreshToken:string}  =   getRefreshToken(req.body);

        await UserModel.findByIdAndUpdate(user._id, { refreshToken: refreshToken, isVerified: true }, { new: true });
        res.status(200).json({
            message: 'OTP verified successfully',
           accessToken,refreshToken,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: 'Internal server error',
            err
        });
    }
}