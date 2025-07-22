import jwt from 'jsonwebtoken';
export function getRefreshToken(body: any) {
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET_JWT;
    const accessTokenExpiry = process.env.ACCESS_TOKEN_EXPIRY_JWT;
    const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET_JWT;
    const refreshTokenExpiry = process.env.REFRESH_TOKEN_EXPIRY_JWT;
    const accessToken = jwt.sign(
        {
            countryCode: body.countryCode,
            phoneNumber: body.phoneNumber
        },
        accessTokenSecret,
        {
            expiresIn: accessTokenExpiry,

        }
    );

    const refreshToken = jwt.sign(
        {
            countryCode: body.countryCode,
            phoneNumber: body.phoneNumber
        },
        refreshTokenSecret,
        {
            expiresIn: refreshTokenExpiry,

        }
    );
    return {
        accessToken,
        refreshToken,
    };
}

export async function verifyRefreshToken(token: string) {
    const decrypt = await jwt.verify(token, process.env.REFRESH_TOKEN_SECRET_JWT as string);
    return decrypt;
}
export async function verifyAccessToken(token: string) {
    const decrypt = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_JWT as string);
    return decrypt;
}