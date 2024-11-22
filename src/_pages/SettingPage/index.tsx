import { Box } from '@mui/material';
import { TabData } from '_constants';
import { BasicTabs, ProfileSection } from '_lib';
import { StyledCard } from '_styledComponents';

const SettingPage = () => {
  const profileComp = <ProfileSection />;
  return (
    <Box
      sx={{
        display: 'flex',
        padding: { sm: '2rem', xs: '0' },
      }}
    >
      <StyledCard sx={{ padding: { sm: '2rem', xs: '0.5rem' } }} isFullScreen>
        <BasicTabs
          tabData={TabData.map((tab) => ({
            ...tab,
            content: tab.active ? profileComp : null,
          }))}
        />
      </StyledCard>
    </Box>
  );
};

export default SettingPage;
