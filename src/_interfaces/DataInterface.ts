import { trxLogoTypeEnum, trxTypeEnum } from '_constants';

export interface trxDataInterface {
  icon: trxLogoTypeEnum;
  description: string;
  date: string;
  amount: number;
  type: trxTypeEnum;
}

export interface userDataInterface {
  name: string;
  username: string;
  email: string;
  profilePicture?: string;
  password: string;
  dob: string;
  address: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface menuItemInterface {
  label: string;
  icon: string;
  name: string;
}
