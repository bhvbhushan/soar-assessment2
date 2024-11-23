import { Box } from '@mui/material';
import { TabData, userInfoData } from '_constants';
import { userDataInterface } from '_interfaces';
import { BasicTabs, ProfileSection } from '_lib';
import { StyledCard } from '_styledComponents';

const SettingPage = () => {
  const onUserDataUpdate = (user: userDataInterface) => {
    console.log({ user });
  };
  const profileComp = (
    <ProfileSection user={userInfoData} onUpdate={onUserDataUpdate} />
  );
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
