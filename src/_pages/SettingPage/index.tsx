import { Box } from '@mui/material';
import { BasicTabs, ProfileSection } from '_lib';
import { StyledCard, StyledTypographyMain } from '_styledComponents';
import React from 'react';

const TabData = [
  {
    label: 'Edit Profile',
    content: <ProfileSection />,
    active: true,
  },
  {
    label: 'Preferences',
    content: (
      <StyledTypographyMain variant="h6">Preferences</StyledTypographyMain>
    ),
    active: false,
  },
  {
    label: 'Security',
    content: <StyledTypographyMain variant="h6">Security</StyledTypographyMain>,
    active: false,
  },
];

const SettingPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: '2rem',
      }}
    >
      <StyledCard sx={{ padding: '2rem' }}>
        <BasicTabs tabData={TabData} />
      </StyledCard>
    </Box>
  );
};

export default SettingPage;
