import { Box, Divider } from '@mui/material';

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
  const chipLogo = isFocused ? ChipLogoTransparent : ChipLogoDark;
  const cardLogo = isFocused ? CardLogoLight : CardLogoDark;
  return (
    <>
      <StyledStack>
        <Box>
          <StyledTypographyLight variant="body1">Balance</StyledTypographyLight>
          <StyledTypographyMain variant="h6">$5,632</StyledTypographyMain>
        </Box>
        <Box>
          <LogoIconComponent src={chipLogo} height={'2rem'} width={'2rem'} />
        </Box>
      </StyledStack>
      <StyledStack>
        <Box>
          <StyledTypographyLight variant="body1">
            CARD HOLDER
          </StyledTypographyLight>
          <StyledTypographyMain variant="h6">Eddy Cusuma</StyledTypographyMain>
        </Box>
        <Box>
          <StyledTypographyLight variant="body1">
            VALID THRU
          </StyledTypographyLight>
          <StyledTypographyMain variant="h6">12/22</StyledTypographyMain>
        </Box>
      </StyledStack>
      <Divider sx={{ mb: '0.5rem' }} />
      <StyledStack>
        <StyledTypographyMain variant="h6">
          3778 **** *** 1234
        </StyledTypographyMain>
        <LogoIconComponent src={cardLogo} height={'1.5rem'} width={'2rem'} />
      </StyledStack>
    </>
  );
};

export default CardComponent;
