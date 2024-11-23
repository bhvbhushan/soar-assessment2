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
  avatar?: string;
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

export interface contactInterface {
  icon: string;
  name: string;
  role: string;
}

export interface tabStrucureInterface {
  label: string;
  content?: React.ReactNode;
  active: boolean;
}

export interface nestedDataInterface {
  // Allowing only 1 level of Nesting
  [key: string]: string | number | { [key: string]: string | number };
}

export interface cardDataInterface {
  cardNumber?: string;
  balance: number;
  expiry: string;
}
