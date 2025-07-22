import { Request, Response } from 'express';
import { refreshTokenSchema } from './schema';
import { connectDB } from '../../utility/mongodb_connect';
import { getRefreshToken, verifyRefreshToken } from '../../utility/jwtToken';
import { UserModel } from '../../models/user/user.model';

export async function refreshTokenController(req: Request, res: Response) {
    const body = req.body;
    const { error } = refreshTokenSchema.validate(body);
    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        });
    }
    await connectDB();
    const data: any = await verifyRefreshToken(body.refreshToken);
    if (!data) {
        return res.status(400).json({
            message: 'Invalid refresh token'
        });
    }
    const user = await UserModel.findOne({ phoneNumber: data.phoneNumber, countryCode: data.countryCode,refreshToken: body.refreshToken })

    if (!user) {
        return res.status(400).json({
            message: 'Invalid refresh token'
        });
    }
    const { accessToken, refreshToken } = getRefreshToken({
        countryCode: user.countryCode,
        phoneNumber: user.phoneNumber
    });

    await UserModel.findByIdAndUpdate(user._id, { refreshToken: refreshToken, isVerified: true }, { new: true });
    res.status(200).json({
        message: 'OTP verified successfully',
        accessToken, refreshToken,

    });

}