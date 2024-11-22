import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { useState } from 'react';
import { TextFieldProps } from '@mui/material';
import { StyledTextField } from '_styledComponents';

const CustomTextField = React.forwardRef(
  (props: TextFieldProps, ref: React.Ref<HTMLDivElement>) => (
    <StyledTextField {...props} ref={ref} fullWidth />
  )
);

const DatePickerComponent: React.FC<{ val: string }> = ({ val }) => {
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

export default DatePickerComponent;
