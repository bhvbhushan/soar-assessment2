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
import { cardDataInterface } from '_interfaces';
import { formatAmount } from '_helpers';

interface cardComponentProps {
  isFocused: boolean;
  cardData: cardDataInterface;
  userName: string;
}
const CardComponent: React.FC<cardComponentProps> = ({
  isFocused,
  cardData,
  userName,
}) => {
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
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
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
              {`$${formatAmount(cardData.balance)}`}
            </StyledTypographyMain>
          </Box>
          <Box>
            <LogoIconComponent
              src={chipLogo}
              height={'2.5rem'}
              width={'2.5rem'}
            />
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
              {userName}
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
              {cardData.expiry}
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
          p: '1rem',
          borderTop: `1px solid ${isFocused ? backgroundSecondary : '#DFEAF2'}`,
          height: '30%',
        }}
      >
        <StyledTypographyMain
          variant="h5"
          isFocused={isFocused}
          focusedColor={focussedColor}
          // noWrap
        >
          {cardData.cardNumber}
        </StyledTypographyMain>
        <LogoIconComponent src={cardLogo} height={'2rem'} width={'3rem'} />
      </Box>
    </>
  );
};

export default CardComponent;
