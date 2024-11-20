import { trxLogoTypeEnum, trxTypeEnum } from '_constants';

export interface trxDataInterface {
  icon: trxLogoTypeEnum;
  description: string;
  date: string;
  amount: number;
  type: trxTypeEnum;
}
