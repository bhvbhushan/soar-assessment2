import { Box } from '@mui/material';
import { TabData } from '_constants';
import { useUser } from '_context';
import { BasicTabs, ProfileSection } from '_lib';
import { StyledCard } from '_styledComponents';

const SettingPage = () => {
  const { state } = useUser();

  const profileComp = <>{state.user && <ProfileSection user={state.user} />}</>;
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
