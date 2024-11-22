import { Box, Typography, useTheme } from '@mui/material';
import { trxLogoTypeEnum, trxTypeEnum } from '_constants';
import { trxDataInterface } from '_interfaces';
import LogoIconComponent from '_lib/LogoIconComponent';
import { StyledTypographyLight, StyledTypographyMain } from '_styledComponents';
import TrxCardLogo from 'assets/TrxCardLogo.png';
import TrxDepositLogo from 'assets/TrxDepositLogo.png';
import TrxPaypalLogo from 'assets/TrxPaypalLogo.png';
import React from 'react';

interface trxCardProps {
  trx: trxDataInterface;
}

const logoIconMap = {
  card: TrxCardLogo,
  deposit: TrxDepositLogo,
  paypal: TrxPaypalLogo,
};

const trxLogo = (logoName: trxLogoTypeEnum) => (
  <LogoIconComponent
    src={logoIconMap[logoName]}
    width={'2.5rem'}
    height={'2.5rem'}
  />
);
const TransactionCardComponent: React.FC<trxCardProps> = ({ trx }) => {
  const theme = useTheme();
  return (
    <Box
      display={'flex'}
      sx={{ justifyContent: 'space-between', my: '1rem', p: '0.5rem' }}
    >
      <Box display={'flex'}>
        {trxLogo(trx.icon)}
        <Box
          display={'flex'}
          sx={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            ml: '0.5rem',
          }}
        >
          <StyledTypographyMain variant="body1" sx={{ fontWeight: 600 }}>
            {trx.description}
          </StyledTypographyMain>
          <StyledTypographyLight variant="body2">
            {trx.date}
          </StyledTypographyLight>
        </Box>
      </Box>
      <Typography
        variant="h6"
        sx={{
          color:
            trx.type === trxTypeEnum.debit
              ? theme.palette.transaction.debit
              : theme.palette.transaction.credit,
        }}
      >
        {`${trx.type === trxTypeEnum.debit ? '-' : '+'}$${trx.amount}`}
      </Typography>
    </Box>
  );
};

export default TransactionCardComponent;
