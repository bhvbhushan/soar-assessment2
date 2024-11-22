import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledStack = styled(Stack)(() => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  p: '0.5 rem',
  mb: '0.5rem',
}));
