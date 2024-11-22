import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  variants: 'contained',
  backgroundColor: 'black',
  color: theme.palette.background.paper,
  padding: '1rem 2rem',
  borderRadius: '15px',
}));
