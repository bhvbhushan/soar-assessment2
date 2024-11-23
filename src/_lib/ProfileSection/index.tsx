import { Box, CircularProgress, Grid2 as Grid } from '@mui/material';
import UserProfileIcon from 'assets/UserProfileIcon.png';
import { EditAvatar, FormDataComponent } from '_lib';
import { StyledButton } from '_styledComponents';
import { userDataInterface } from '_interfaces';
import { fieldInputTypeEnum, fieldLabelMapping } from '_constants';
import { ChangeEvent, FormEvent, useState } from 'react';
import { validationSchema } from '_validations';
import { useAlert, useUser } from '_context';
import { updateUserData } from '_controllers';
import { ValidationError } from 'yup';

type FieldKey = keyof typeof fieldLabelMapping;

interface UserEditFormProps {
  user: userDataInterface; // Current user data
  onUpdate: (updatedUser: userDataInterface) => void; // Callback after successful update
}

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

const ProfileSection: React.FC<UserEditFormProps> = ({ user, onUpdate }) => {
  const { dispatch: userDispatch } = useUser();
  const { showSuccess, showError } = useAlert();
  const [formData, setFormData] = useState<userDataInterface>(user);

  const [errors, setErrors] = useState<
    Partial<Record<keyof userDataInterface, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log({ name, value });

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the error for the field
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  // Validate the form data
  const validate = async (): Promise<boolean> => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof ValidationError) {
        const validationErrors: Partial<
          Record<keyof userDataInterface, string>
        > = {};

        err.inner.forEach((error) => {
          if (
            error.path &&
            !validationErrors[error.path as keyof userDataInterface]
          ) {
            validationErrors[error.path as keyof userDataInterface] =
              error.message || 'Invalid value';
          }
        });

        setErrors(validationErrors);
      } else {
        // Handle unexpected errors
        console.error('An unexpected error occurred:', err);
        showError('An unexpected error occurred during validation.');
      }
      return false;
    }
  };

  // Handle form submission
  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();

    const isValid = await validate();
    if (!isValid) return;

    setIsSubmitting(true);

    // Make API request to update user details
    // Replace the URL with your actual API endpoint

    const { success, data } = await updateUserData(formData);
    console.log({ data });

    // Assuming the API returns the updated user data
    if (success) {
      userDispatch({
        type: 'SET_USER',
        payload: data as userDataInterface,
      });
      onUpdate(data as userDataInterface);
      showSuccess('Profile updated successfully!');
    } else {
      console.error('Error updating profile:', data);
      showError('Failed to update profile.');
    }

    setIsSubmitting(false);
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmitForm}
      noValidate
      sx={{
        display: 'flex',
        rowGap: '10',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
      }}
    >
      <EditAvatar currentAvatarUrl={UserProfileIcon} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
          flex: 1,
        }}
      >
        <Grid container spacing={5} size={12}>
          {[...Object.keys(fieldLabelMapping)].map((key) => {
            const field = key as FieldKey;
            return (
              <FormDataComponent
                label={fieldLabelMapping[field] ? fieldLabelMapping[field] : ''}
                inputType={getInputType(field)}
                inputData={formData[field] ? (formData[field] as string) : ''}
                handleChange={handleChange}
                error={!!errors[field]}
                errorTxt={errors[field]}
                name={field}
              />
            );
          })}
        </Grid>
        <StyledButton
          type="submit"
          disabled={isSubmitting}
          startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
          sx={{
            alignSelf: { sm: 'flex-end', xs: 'stretch' },
          }}
        >
          Save
        </StyledButton>
      </Box>
    </Box>
  );
};

export default ProfileSection;
