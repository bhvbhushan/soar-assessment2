import { styled, TextField } from '@mui/material';

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '15px', // Set desired border radius
    color: theme.palette.primary.main,
    fontSize: '1rem',
  },
}));
