import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTypographyLight = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
}));

export const StyledTypographyMain = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
