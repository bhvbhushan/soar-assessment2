import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { dimension } from '_constants';

interface moduleWrapperInterface {
  width: dimension;
}

export const ModuleWrapper = styled(Box)<moduleWrapperInterface>(
  ({ theme, width }) => ({
    display: 'flex',
    width: width,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginY: '2rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: '3rem',
    },
  })
);
