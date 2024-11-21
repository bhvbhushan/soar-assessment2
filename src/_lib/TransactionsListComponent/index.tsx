import { List } from '@mui/material';
import { trxLogoTypeEnum, TrxMockData, trxTypeEnum } from '_constants';
import { ModuleComponent, TransactionCardComponent } from '_lib';

const TransactionsListComponent = () => {
  const transactions = TrxMockData.map((trx) => {
    return {
      ...trx,
      icon: trx.icon as trxLogoTypeEnum,
      type: trx.type as trxTypeEnum,
    };
  });
  return (
    <ModuleComponent primaryHeader="Recent Transactions" width={'40%'}>
      <List>
        {transactions.map((trx, idx) => {
          return <TransactionCardComponent trx={trx} key={idx} />;
        })}
      </List>
    </ModuleComponent>
  );
};

export default TransactionsListComponent;
