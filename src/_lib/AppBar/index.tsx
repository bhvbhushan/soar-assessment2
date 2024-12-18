import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoIconComponent } from '_lib';
import { IconWrapper, SearchInput } from '_styledComponents';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import settingLogo from 'assets/settingIconHeader.png';
import notificationLogo from 'assets/notification.png';
import userLogo from 'assets/user.png';
import { menuItemInterface } from '_interfaces';

interface appBarProps {
  appbarWidth: string;
  isMobile: boolean;
  isTab: boolean;
  handleDrawerToggle: () => void;
  header: menuItemInterface;
}

interface appBarSmProps {
  handleDrawerToggle: () => void;
  header: menuItemInterface;
  isTab?: boolean;
}

const appBarLg: React.FC<appBarSmProps> = ({
  header,
  handleDrawerToggle,
  isTab,
}) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isTab && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" noWrap component="div">
          {header.label}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', width: { md: '50%' }, gap: 4 }}>
        <SearchInput />

        <IconWrapper>
          <LogoIconComponent src={settingLogo} width={'1rem'} height={'1rem'} />
        </IconWrapper>
        <IconWrapper>
          <LogoIconComponent
            src={notificationLogo}
            width={'1rem'}
            height={'1rem'}
          />
        </IconWrapper>

        <LogoIconComponent src={userLogo} height={'3rem'} width={'3rem'} />
      </Box>
    </>
  );
};

const appBarSm: React.FC<appBarSmProps> = ({ handleDrawerToggle, header }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        p: '1rem',
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap component="div">
          {header.label}
        </Typography>
        <LogoIconComponent src={userLogo} height={'3.5rem'} width={'3.5rem'} />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <SearchInput />
      </Box>
    </Box>
  );
};

const AppBarCustom: React.FC<appBarProps> = ({
  appbarWidth,
  isMobile,
  isTab,
  handleDrawerToggle,
  header,
}) => (
  <>
    <AppBar position="fixed" sx={{ width: appbarWidth, m: 0 }} color="inherit">
      <Toolbar
        sx={{ display: 'flex', justifyContent: 'space-between', py: '0.7rem' }}
      >
        {isMobile
          ? appBarSm({ handleDrawerToggle, header })
          : appBarLg({ header, handleDrawerToggle, isTab })}
      </Toolbar>
    </AppBar>
  </>
);

export default AppBarCustom;
