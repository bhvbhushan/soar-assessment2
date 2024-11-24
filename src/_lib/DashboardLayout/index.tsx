import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  useMediaQuery,
  Container,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';

import dashboardActive from 'assets/dashboardActive.png';
import dashboardInactive from 'assets/dashboardInactive.png';
import settingActive from 'assets/settingActive.png';
import settingInactive from 'assets/settingInactive.png';
import txns from 'assets/txns.png';
import accounts from 'assets/accounts.png';
import investments from 'assets/investments.png';
import cc from 'assets/cc.png';
import loans from 'assets/loans.png';
import services from 'assets/services.png';
import privileges from 'assets/privileges.png';
import CompanyLogo from 'assets/CompanyLogo.png';
import LogoIconComponent from '_lib/LogoIconComponent';

import { StyledTypographyMain } from '_styledComponents';
import { useNavigate } from 'react-router-dom';
import { AppBarCustom, AppLoader } from '_lib';
import { menuItemInterface, userDataInterface } from '_interfaces';
import { menuItem } from '_constants';
import { useAlert, useUser } from '_context';
import { getUserProfile } from '_controllers';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const menuItems: menuItemInterface[] = menuItem;
  const navigate = useNavigate();
  const [header, setHeader] = useState<menuItemInterface>(menuItems[0]);
  const dashboardIcon =
    header.icon === 'dashboard' ? dashboardActive : dashboardInactive;
  const settingIcon =
    header.icon === 'setting' ? settingActive : settingInactive;
  const iconMap = {
    dashboard: dashboardIcon,
    setting: settingIcon,
    txns,
    accounts,
    investments,
    cc,
    loans,
    services,
    privileges,
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTab = useMediaQuery(theme.breakpoints.down('md')) && !isMobile;
  const displayDrawer = !isMobile && !isTab ? true : false;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const drawerWidth = !displayDrawer ? 240 : '20%';
  const appbarWidth = !displayDrawer ? '100%' : '80%';

  const { dispatch: userDispatch } = useUser();
  const { showError } = useAlert();
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUserProfile();
      if (response.success) {
        userDispatch({
          type: 'SET_USER',
          payload: response.data as userDataInterface,
        });
      } else {
        const message =
          (response.data as string) || 'Failed to fetch user data.';
        showError(message);
      }

      setLoading(false);
    };

    fetchUser();
  }, [userDispatch, showError]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuClickHandler = (text: menuItemInterface) => {
    setHeader(text);
    navigate(`/${text.name}`);
    if (isMobile || isTab) setMobileOpen(false);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ py: '1rem' }}>
        <LogoIconComponent
          src={CompanyLogo}
          height={'2.5rem'}
          width={'2.5rem'}
        />
        <Typography variant="h4" noWrap>
          Soar Task
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map((text) => (
          <ListItem>
            <ListItemButton
              key={text.name}
              onClick={() => menuClickHandler(text)}
              component="menu"
              disabled={!['dashboard', 'setting'].includes(text.icon)}
            >
              <ListItemIcon>
                <LogoIconComponent
                  src={iconMap[text.icon as keyof typeof iconMap]}
                  width={'2rem'}
                  height={'2rem'}
                />
              </ListItemIcon>
              <ListItemText>
                <StyledTypographyMain variant="h6">
                  {text.label}
                </StyledTypographyMain>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div
      style={{
        display: 'flex',
        height: '90%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        margin: 0,
      }}
    >
      {loading && <AppLoader loaderMsg="Fetching User Info..." />}
      <AppBarCustom
        header={header}
        isMobile={isMobile}
        isTab={isTab}
        appbarWidth={appbarWidth}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* Drawer */}
      <nav aria-label="mailbox folders">
        {displayDrawer ? (
          <Drawer
            variant="permanent"
            sx={{
              display: { md: 'none', lg: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        ) : (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { sm: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        )}
      </nav>
      <Toolbar />
      <Toolbar />
      {isMobile && (
        <>
          <Toolbar />
          <Toolbar />
          <Toolbar />
        </>
      )}

      {/* Main content */}
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: 5,
          // justifyContent: 'flex-end',
          padding: theme.spacing(3),
          width: appbarWidth,
          minHeight: '100%',
          p: '1rem',
          mx: 0,
          mt: {
            xs: '4rem',
            sm: '4rem',
          },
          overflow: 'scrollable',
        }}
      >
        {children}
      </Container>
    </div>
  );
};

export default DashboardLayout;
