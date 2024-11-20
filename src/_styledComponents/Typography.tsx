import { PaletteColorOptions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface StyledTypoProps {
  isFocused?: boolean;
  focusedColor?: keyof PaletteColorOptions | string;
}

export const StyledTypographyLight = styled(Typography)<StyledTypoProps>(
  ({ theme, isFocused = false, focusedColor }) => ({
    color: isFocused ? focusedColor : theme.palette.primary.light,
  })
);

export const StyledTypographyMain = styled(Typography)<StyledTypoProps>(
  ({ theme, isFocused = false, focusedColor }) => ({
    color: isFocused ? focusedColor : theme.palette.primary.main,
  })
);
