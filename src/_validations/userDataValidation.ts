import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .max(50, 'Maximum 50 characters'),
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Minimum 3 characters')
    .max(30, 'Maximum 30 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  password: yup
    .string()
    .notRequired()
    .min(6, 'Password must be at least 6 characters'),
  dob: yup
    .date()
    .required('Date of Birth is required')
    .max(new Date(), 'Date of Birth cannot be in the future'),
  address: yup
    .string()
    .required('Address is required')
    .max(100, 'Maximum 100 characters'),
  permanentAddress: yup
    .string()
    .required('Permanent Address is required')
    .max(100, 'Maximum 100 characters'),
  city: yup
    .string()
    .required('City is required')
    .max(50, 'Maximum 50 characters'),
  postalCode: yup
    .string()
    .required('Postal Code is required')
    .matches(/^\d{5}(-\d{4})?$/, 'Invalid Postal Code format'),
  country: yup
    .string()
    .required('Country is required')
    .max(50, 'Maximum 50 characters'),
  avatar: yup
    .mixed()
    .test('fileSize', 'File Size is too large (max 5MB)', (value) => {
      if (!value) return true; // Attachment is optional
      return (value as File).size <= 5 * 1024 * 1024;
    })
    .test('fileType', 'Unsupported File Format', (value) => {
      if (!value) return true;
      return ['image/jpeg', 'image/png', 'image/gif'].includes(
        (value as File).type
      );
    }),
});
