import { Request, Response } from 'express';
import { verifyAccessToken, verifyRefreshToken } from '../../utility/jwtToken';
import { UserModel } from '../../models/user/user.model';
import { connectDB } from '../../utility/mongodb_connect';
import { connectRedis, REDIS_KEYS } from '../../utility/redis_connect';

export async function logoutController(req: Request, res: Response) {
    await connectDB();
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization header missing or invalid.' });
    }

    const accessToekn = authHeader.split(' ')[1];
    const refreshToken: any = req.body.refreshToken;

    const accessTokenData: any = await verifyAccessToken(accessToekn);
    const refreshTokenData: any = await verifyRefreshToken(refreshToken);
    if (!accessTokenData && !refreshTokenData) {
        return res.status(401).json({ message: 'Invalid access or refresh token.' });
    }

    const user = await UserModel.findOneAndUpdate({ phoneNumber: refreshTokenData.phoneNumber, countryCode: refreshTokenData.countryCode, refreshToken: refreshToken }, { $set: { refreshToken: '' } })

    const redis = await connectRedis();
    redis.lpush(`${REDIS_KEYS.ACCESS_TOKEN_BLOCK}:${user.id}`, accessToekn);
    redis.expire(`${REDIS_KEYS.ACCESS_TOKEN_BLOCK}:${user.id}`,Number( process.env.BLOCK_ACCESS_TOKEN_EXPIRY_REDIS) );
    res.status(200).json({
        message: 'Logout successful',
    });


}