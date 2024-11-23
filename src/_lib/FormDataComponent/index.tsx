import { Box, Grid2 as Grid } from '@mui/material';
import { fieldInputTypeEnum } from '_constants';
import { DatePickerComponent } from '_lib';
import { StyledTextField, StyledTypographyMain } from '_styledComponents';
import React, { ChangeEvent } from 'react';

interface formDataInterface {
  name: string;
  label: string;
  inputType: fieldInputTypeEnum;
  inputData: string;
  error: boolean;
  errorTxt: string | undefined;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const FormDataComponent: React.FC<formDataInterface> = ({
  label,
  inputType,
  inputData,
  handleChange,
  error,
  errorTxt,
  name,
}) => {
  return (
    <Grid size={{ sm: 12, md: 6 }} flexGrow={1}>
      <Box sx={{ fontSize: '1rem' }}>
        <StyledTypographyMain variant="h6">{label}</StyledTypographyMain>
        {inputType === 'date' ? (
          <DatePickerComponent val={inputData} />
        ) : (
          <StyledTextField
            name={name}
            value={inputData}
            type={inputType}
            fullWidth
            onChange={handleChange}
            error={!!error}
            helperText={errorTxt}
          />
        )}
      </Box>
    </Grid>
  );
};

export default FormDataComponent;
