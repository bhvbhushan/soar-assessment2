import { Box } from '@mui/material';
import { CardWrapperComponent, TransactionsListComponent } from '_lib';

const DashboardPage = () => {
  return (
    <>
      <Box
        display={'flex'}
        columnGap={2}
        sx={{ flexDirection: { xs: 'column', md: 'row' }, height: '100%' }}
      >
        <CardWrapperComponent />
        <TransactionsListComponent />
      </Box>
    </>
  );
};

export default DashboardPage;
