import { Box, useTheme } from '@mui/material';

import ChipLogoTransparent from 'assets/ChipLogoTransparent.png';
import ChipLogoDark from 'assets/ChipLogoDark.png';
import CardLogoDark from 'assets/CardLogoDark.png';
import CardLogoLight from 'assets/CardLogoLight.png';
import { LogoIconComponent } from '_lib';
import {
  StyledStack,
  StyledTypographyLight,
  StyledTypographyMain,
} from '_styledComponents';

interface cardComponentProps {
  isFocused: boolean;
}
const CardComponent: React.FC<cardComponentProps> = ({ isFocused }) => {
  const theme = useTheme();
  const chipLogo = isFocused ? ChipLogoTransparent : ChipLogoDark;
  const cardLogo = isFocused ? CardLogoLight : CardLogoDark;
  const backgroundMain = isFocused
    ? 'linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)'
    : theme.palette.background.paper;

  const backgroundSecondary = isFocused
    ? 'linear-gradient(to right, #38373e 0%, #38373e 100%)'
    : theme.palette.background.paper;
  const focussedColor = theme.palette.background.paper;
  return (
    <>
      <Box
        sx={{
          background: backgroundMain,
          p: '1rem',
          height: '70%',
        }}
      >
        <StyledStack>
          <Box>
            <StyledTypographyLight
              variant="subtitle1"
              isFocused={isFocused}
              focusedColor={focussedColor}
            >
              Balance
            </StyledTypographyLight>
            <StyledTypographyMain
              variant="h5"
              isFocused={isFocused}
              focusedColor={focussedColor}
            >
              $5,632
            </StyledTypographyMain>
          </Box>
          <Box>
            <LogoIconComponent src={chipLogo} height={'2rem'} width={'2rem'} />
          </Box>
        </StyledStack>
        <StyledStack>
          <Box>
            <StyledTypographyLight
              variant="subtitle1"
              isFocused={isFocused}
              focusedColor={focussedColor}
            >
              CARD HOLDER
            </StyledTypographyLight>
            <StyledTypographyMain
              variant="body1"
              isFocused={isFocused}
              focusedColor={focussedColor}
            >
              Eddy Cusuma
            </StyledTypographyMain>
          </Box>
          <Box>
            <StyledTypographyLight
              variant="subtitle1"
              isFocused={isFocused}
              focusedColor={focussedColor}
            >
              VALID THRU
            </StyledTypographyLight>
            <StyledTypographyMain
              variant="body1"
              isFocused={isFocused}
              focusedColor={focussedColor}
            >
              12/22
            </StyledTypographyMain>
          </Box>
        </StyledStack>
      </Box>
      <Box
        sx={{
          background: backgroundSecondary,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 1,
          borderTop: `1px solid ${isFocused ? backgroundSecondary : '#DFEAF2'}`,
          height: '30%',
        }}
      >
        <StyledTypographyMain
          variant="h4"
          isFocused={isFocused}
          focusedColor={focussedColor}
        >
          3778 **** *** 1234
        </StyledTypographyMain>
        <LogoIconComponent src={cardLogo} height={'1.5rem'} width={'2rem'} />
      </Box>
    </>
  );
};

export default CardComponent;
