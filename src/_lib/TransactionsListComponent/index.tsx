import { List } from '@mui/material';
import { trxLogoTypeEnum, trxTypeEnum } from '_constants';
import { useAlert } from '_context';
import { getTransactionData } from '_controllers';
import { trxDataInterface } from '_interfaces';
import { ModuleComponent, TransactionCardComponent } from '_lib';
import { useEffect, useState } from 'react';

const TransactionsListComponent = () => {
  const [txns, setTxns] = useState<trxDataInterface[]>([]);
  const { showError } = useAlert();
  useEffect(() => {
    const getTxnData = async () => {
      const { success, data } = await getTransactionData();
      if (success) {
        setTxns(data as trxDataInterface[]);
      } else {
        const message = ' Error fetching transaction data';
        showError(message);
      }
    };
    getTxnData();
  }, []);

  return (
    <ModuleComponent primaryHeader="Recent Transactions" width={'40%'}>
      <List>
        {txns.length > 0 &&
          txns.map((trx, idx) => {
            const updatedTrx = {
              ...trx,
              icon: trx.icon as trxLogoTypeEnum,
              type: trx.type as trxTypeEnum,
            };
            return <TransactionCardComponent trx={updatedTrx} key={idx} />;
          })}
      </List>
    </ModuleComponent>
  );
};

export default TransactionsListComponent;
