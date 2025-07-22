// models/CountryModel.ts

import mongoose, { Schema, Document, model, models } from 'mongoose';
import { ICountry } from './country.interface';

export interface ICountryDocument extends ICountry, Document {}

const CountrySchema: Schema = new Schema<ICountryDocument>({
  country: { type: String, required: true },
  code: { type: String, required: true },
  flag: { type: String, required: true },
  status: { type: Boolean, default: true },
});

const CountryModel = models.Country || model<ICountryDocument>('Country', CountrySchema);

export default CountryModel;
