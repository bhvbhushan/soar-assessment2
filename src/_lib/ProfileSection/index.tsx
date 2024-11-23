import { Box, CircularProgress, Grid2 as Grid } from '@mui/material';
import UserProfileIcon from 'assets/UserProfileIcon.png';
import { CustomAlert, EditAvatar, FormDataComponent } from '_lib';
import { StyledButton } from '_styledComponents';
import { userDataInterface } from '_interfaces';
import { fieldInputTypeEnum, fieldLabelMapping } from '_constants';
import { ChangeEvent, FormEvent, useState } from 'react';
import { validationSchema } from '_validations';
import { useAlert } from '_context';

type FieldKey = keyof typeof fieldLabelMapping;

// Define the form inputs, extending User without certain fields
interface FormInputs {
  name: string;
  username: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  dob: string;
  address: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
  avatar?: File;
}

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
  const { showSuccess, showError } = useAlert();
  const [formData, setFormData] = useState<FormInputs>({
    name: user.name,
    username: user.username,
    email: user.email,
    dob: user.dob, // Format to YYYY-MM-DD
    address: user.address,
    permanentAddress: user.permanentAddress,
    city: user.city,
    postalCode: user.postalCode,
    country: user.country,
  });

  const [avatarPreview, setAvatarPreview] = useState<string | undefined>(
    UserProfileIcon
  );
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormInputs, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

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

  // Handle avatar upload
  const handleAvatarChange = (file: File) => {
    setFormData((prev) => ({
      ...prev,
      avatar: file,
    }));

    // Update the preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Clear the error for avatar
    setErrors((prev) => ({
      ...prev,
      avatar: '',
    }));
  };

  // Validate the form data
  const validate = async (): Promise<boolean> => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      const validationErrors: Partial<Record<keyof FormInputs, string>> = {};
      err.inner.forEach(
        (error: { path: string; message: string | undefined }) => {
          if (error.path && !validationErrors[error.path as keyof FormInputs]) {
            validationErrors[error.path as keyof FormInputs] = error.message;
          }
        }
      );
      setErrors(validationErrors);
      return false;
    }
  };

  // Handle form submission
  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();

    const isValid = await validate();
    if (!isValid) return;

    setIsSubmitting(true);

    try {
      // Prepare form data
      const submissionData = new FormData();
      submissionData.append('name', formData.name);
      submissionData.append('username', formData.username);
      submissionData.append('email', formData.email);
      if (formData.password) {
        submissionData.append('password', formData.password);
      }
      submissionData.append('dob', formData.dob);
      submissionData.append('address', formData.address);
      submissionData.append('permanentAddress', formData.permanentAddress);
      submissionData.append('city', formData.city);
      submissionData.append('postalCode', formData.postalCode);
      submissionData.append('country', formData.country);
      if (formData.avatar) {
        submissionData.append('avatar', formData.avatar);
      }

      // Make API request to update user details
      // Replace the URL with your actual API endpoint
      // const response = await axios.put('/api/users/update', submissionData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });

      // // Assuming the API returns the updated user data
      // onUpdate(response.data);
      showSuccess('Profile updated successfully!');
    } catch (error: any) {
      console.error('Error updating profile:', error);
      showError(error.response?.data?.message || 'Failed to update profile.');
    } finally {
      setIsSubmitting(false);
    }
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
      <EditAvatar
        currentAvatarUrl={avatarPreview}
        onAvatarChange={handleAvatarChange}
      />
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
