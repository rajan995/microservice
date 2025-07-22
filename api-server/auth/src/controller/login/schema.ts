import joi from 'joi';

export const loginSchema = joi.object({
    countryCode: joi.string().required(),
    phoneNumber: joi.string().required(),
})

