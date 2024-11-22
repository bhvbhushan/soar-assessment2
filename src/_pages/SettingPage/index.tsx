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
        padding: '2rem',
      }}
    >
      <StyledCard sx={{ padding: '2rem' }}>
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
