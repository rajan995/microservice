import { Request, Response } from 'express';
import { loginSchema } from './schema';
import { connectDB } from '../../utility/mongodb_connect';
import { UserModel } from '../../models/user/user.model';
export async function loginController(req: Request, res: Response) {
    try {
        const body = req.body;
        const { error } = loginSchema.validate(body);

        if (error) {
            return res.status(400).json({
                message: error.details[0].message
            });
        }
        await connectDB();

        if (await UserModel.findOne({ phoneNumber: body.phoneNumber, countryCode: body.countryCode })) {
            return res.status(400).json({
                message: 'User already exists'
            });

        }
        const otp = String(Math.floor(100000 + Math.random() * 900000));

        const user = new UserModel({
            countryCode: body.countryCode,
            phoneNumber: body.phoneNumber,
            otp
        });

        const userSave = await user.save();
        if (userSave) {
            res.status(201).json({
                countryCode: body.countryCode,
                phoneNumber: body.phoneNumber,
                otp
            });
        } else {
            return res.status(400).json({
                message: 'Something went wrong, please try again later'
            });
        }


    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal server error', err
        });
    }


}