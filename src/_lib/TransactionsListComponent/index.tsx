import { Box, List } from '@mui/material';
import { trxLogoTypeEnum, TrxMockData, trxTypeEnum } from '_constants';
import { TransactionCardComponent } from '_lib';
import { StyledTypographyMain } from '_styledComponents';
import React from 'react';

const TransactionsListComponent = () => {
  const transactions = TrxMockData.map((trx) => {
    return {
      ...trx,
      icon: trx.icon as trxLogoTypeEnum,
      type: trx.type as trxTypeEnum,
    };
  });
  return (
    <Box
      display={'flex'}
      sx={{
        flexDirection: 'column',
        flex: '1 1 auto',
        maxHeight: '25%',
        border: '1px solid red',
      }}
    >
      <StyledTypographyMain variant="h6">
        Recent Transactions
      </StyledTypographyMain>
      <List sx={{ overflowY: 'auto' }}>
        {transactions.map((trx, idx) => {
          return <TransactionCardComponent trx={trx} key={idx} />;
        })}
      </List>
    </Box>
  );
};

export default TransactionsListComponent;
