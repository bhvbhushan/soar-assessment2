import { Avatar, Box, Grid2 as Grid } from '@mui/material';
import UserProfileIcon from 'assets/UserProfileIcon.png';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { FormDataComponent } from '_lib';
import { StyledBadge, StyledButton } from '_styledComponents';
import { userDataInterface } from '_interfaces';
import { fieldInputTypeEnum } from '_constants';

type FieldKey = keyof typeof fieldLabelMapping;

const userData: userDataInterface = {
  name: 'John Doe',
  username: 'John Doe',
  email: 'john.doe@example.com',
  profilePicture: UserProfileIcon,
  password: '1234567890',
  dob: '1999-11-22',
  address: 'San Jose, California',
  permanentAddress: 'San Jose, California',
  city: 'San Jose',
  postalCode: '24567',
  country: 'USA',
};

const fieldLabelMapping: userDataInterface = {
  name: 'Name',
  username: 'User Name',
  email: 'Email',
  password: 'Password',
  dob: 'Date of Birth',
  address: 'Present Address',
  permanentAddress: 'Permanent Address',
  city: 'City',
  postalCode: 'Postal Code',
  country: 'Country',
};

const getInputType = (field: string) => {
  switch (field) {
    case 'password':
      return fieldInputTypeEnum.password;
    case 'dob':
      return fieldInputTypeEnum.date;
    default:
      return fieldInputTypeEnum.text;
  }
};

const ProfileSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        rowGap: '10',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
      }}
    >
      <Box sx={{ mr: '2rem' }}>
        <StyledBadge
          overlap="circular"
          color="primary"
          onClick={() => console.log('Badge Clicked')}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <ModeEditOutlineIcon sx={{ color: 'white', fontSize: '0.8rem' }} />
          }
        >
          <Avatar
            alt="Travis Howard"
            src={userData.profilePicture}
            sx={{ width: '5rem', height: '5rem' }}
          />
        </StyledBadge>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { sm: 'column', xs: 'row' },
          gap: 5,
        }}
      >
        <Grid container spacing={5}>
          {[...Object.keys(fieldLabelMapping)].map((key) => {
            const field = key as FieldKey;
            return (
              <FormDataComponent
                label={fieldLabelMapping[field]}
                inputType={getInputType(field)}
                inputData={userData[field]}
              />
            );
          })}
        </Grid>
        <StyledButton sx={{ alignSelf: 'flex-end' }}>Save</StyledButton>
      </Box>
    </Box>
  );
};

export default ProfileSection;
