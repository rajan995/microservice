import { model, Schema, models } from 'mongoose';
import { Role } from './user.interface';

const UserSchema = new Schema({
  countryCode: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String
  },
  profile: {
    type: String
  },
  age: {
    type: Number
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true
  },
  refreshToken: {
    type: String
  },
  fcmToken: {
    type: String
  },
  otp: {
    type: String
  },
  role: { type: String, enum: Role, default: Role.client, required: true },
  isVerified: {
    type: Boolean,
    default: false
  },
  lastLoginAt: {
    type: Date
  },
  lastLogoutAt: {
    type: Date
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
    index: true
  }
}, {
  timestamps: true
});

UserSchema.index({ countryCode: 1, phoneNumber: 1 }, { unique: true });
export const UserModel = models.User || model('User', UserSchema);