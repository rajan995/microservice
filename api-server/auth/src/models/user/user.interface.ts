export interface IUser {
  _id?: string;
  countryCode: string;
  phoneNumber: string;
  name?: string;          
  profile?: string;      
  age?: number;          
  email?: string;         
  fcmToken?: string;
  refreshToken?: string;
  otp?: string;
  isVerified?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  role: Role;
  lastLoginAt?: Date;
  lastLogoutAt?: Date;
  active: boolean;
}


export enum Role{
  ADMIN="admin",
  client="client",
  salon="partnet",
}