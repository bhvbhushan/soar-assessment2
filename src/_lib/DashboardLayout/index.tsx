import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  useMediaQuery,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const ResponsiveDrawer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const menuItems = ['Home', 'About', 'Contact'];
  const [header, setHeader] = useState(menuItems[0]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const drawerWidth = isMobile ? 240 : '20%';
  const appbarWidth = isMobile ? '100%' : '80%';

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Soar Task
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map((text) => (
          <ListItem button key={text} onClick={() => setHeader(text)}>
            {/* You can add ListItemIcon here */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: appbarWidth }} color="inherit">
        <Toolbar>
          {isMobile && (
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
            {header}
          </Typography>
        </Toolbar>
      </AppBar>

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

      {/* Main content */}
      <main style={{ flexGrow: 1, padding: theme.spacing(3) }}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
};

export default ResponsiveDrawer;
