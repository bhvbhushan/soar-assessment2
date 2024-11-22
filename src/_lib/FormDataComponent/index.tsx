import {
  Box,
  Grid2 as Grid,
  styled,
  TextField,
  TextFieldProps,
} from '@mui/material';
import { StyledTypographyMain } from '_styledComponents';
import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '15px', // Set desired border radius
    color: theme.palette.primary.main,
    fontSize: '1rem',
  },
}));

const CustomTextField = React.forwardRef(
  (props: TextFieldProps, ref: React.Ref<HTMLDivElement>) => (
    <StyledTextField {...props} ref={ref} fullWidth />
  )
);

const DatePickerComponent: React.FC = ({ val }) => {
  console.log({ val });
  const [value, setValue] = useState<Dayjs | null>(dayjs(val));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']} sx={{ width: '100%' }}>
        <DatePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slots={{ textField: CustomTextField }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

const FormDataComponent = ({ label, inputType, inputData }) => {
  return (
    <Grid size={{ sm: 12, md: 6 }}>
      <Box sx={{ fontSize: '1rem' }}>
        <StyledTypographyMain variant="h6">{label}</StyledTypographyMain>
        {inputType === 'date' ? (
          <DatePickerComponent val={inputData} />
        ) : (
          <StyledTextField value={inputData} type={inputType} fullWidth />
        )}
      </Box>
    </Grid>
  );
};

export default FormDataComponent;
