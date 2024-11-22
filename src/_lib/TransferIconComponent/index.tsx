import { Box, Button, useTheme } from '@mui/material';
import { contactInterface } from '_interfaces';
import LogoIconComponent from '_lib/LogoIconComponent';
import { StyledTypographyLight, StyledTypographyMain } from '_styledComponents';
import LiviaLogo from 'assets/LiviaLogo.png';
import RandyLogo from 'assets/Randy.png';
import Workman1 from 'assets/Workman1.png';
import Workman2 from 'assets/Workman2.png';
import Workman3 from 'assets/Workman3.png';

import React from 'react';

const TransferIconComponent: React.FC<{ item: contactInterface }> = ({
  item,
}) => {
  const theme = useTheme();
  const iconMap = {
    livia: LiviaLogo,
    randy: RandyLogo,
    workman1: Workman1,
    workman2: Workman2,
    workman3: Workman3,
  };
  return (
    <Box
      sx={{
        py: '1rem',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: theme.palette.background.paper,
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.25)',
        },
        '&:hover .childTypography': {
          fontWeight: 700, // Increase font weight on hover
        },
      }}
    >
      <Button sx={{ display: 'flex', flexDirection: 'column' }}>
        <LogoIconComponent
          src={iconMap[item.icon as keyof typeof iconMap]}
          height={'4rem'}
          width={'4rem'}
        />
        <StyledTypographyMain variant="body1" className="childTypography">
          {item.name}
        </StyledTypographyMain>
        <StyledTypographyLight variant="body2" className="childTypography">
          {item.role}
        </StyledTypographyLight>
      </Button>
    </Box>
  );
};

export default TransferIconComponent;
