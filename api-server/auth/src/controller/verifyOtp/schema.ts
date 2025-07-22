import joi from 'joi';

export const verifyOtpSchema = joi.object({
    countryCode: joi.string().required(),
    phoneNumber: joi.string().required(),
    otp: joi.string().required(),
    fcmToken: joi.string().optional(),
})