import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Toolbar,
  CssBaseline,
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
import { AppBarCustom } from '_lib';
import { menuItemInterface } from '_interfaces';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const menuItems: menuItemInterface[] = [
    { label: 'Dashboard', icon: 'dashboard', name: 'dashboard' },
    { label: 'Transactions', icon: 'txns', name: 'transactions' },
    { label: 'Accounts', icon: 'accounts', name: 'accounts' },
    { label: 'Investments', icon: 'investments', name: 'investments' },
    { label: 'Credit Cards', icon: 'cc', name: 'cc' },
    { label: 'Loans', icon: 'loans', name: 'loans' },
    { label: 'Services', icon: 'services', name: 'services' },
    { label: 'My Privileges', icon: 'privileges', name: 'privileges' },
    { label: 'Setting', icon: 'setting', name: 'setting' },
  ];
  const navigate = useNavigate();
  const [header, setHeader] = useState(menuItems[0]);
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
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const drawerWidth = isMobile ? 240 : '20%';
  const appbarWidth = isMobile ? '100%' : '80%';

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuClickHandler = (text: menuItemInterface) => {
    setHeader(text);
    navigate(`/${text.name}`);
    if (isMobile) setMobileOpen(false);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ py: '1rem' }}>
        <LogoIconComponent
          src={CompanyLogo}
          height={'2.5rem'}
          width={'2.5rem'}
        />
        <Typography variant="h5" noWrap>
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
                  src={iconMap[text.icon]}
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
      <CssBaseline />
      <AppBarCustom
        header={header}
        isMobile={isMobile}
        appbarWidth={appbarWidth}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* Drawer */}
      <nav aria-label="mailbox folders">
        {/* Temporary drawer for mobile */}
        {isMobile && (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        )}
        {/* Permanent drawer for desktop */}
        {!isMobile && (
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
            open
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
          justifyContent: 'flex-start',
          padding: theme.spacing(3),
          width: appbarWidth,
          minHeight: '100%',
          p: '1rem',
          m: 0,
          overflow: 'scrollable',
        }}
      >
        {children}
      </Container>
    </div>
  );
};

export default DashboardLayout;
