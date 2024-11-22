import { styled } from '@mui/material';

export const IconWrapper = styled('div')(({ theme }) => ({
  background: theme.palette.background.default,
  borderRadius: '50%',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
