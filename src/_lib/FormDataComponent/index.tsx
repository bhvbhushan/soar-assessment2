import { Box, Grid2 as Grid } from '@mui/material';
import { fieldInputTypeEnum } from '_constants';
import { DatePickerComponent } from '_lib';
import { StyledTextField, StyledTypographyMain } from '_styledComponents';
import React from 'react';

interface formDataInterface {
  label: string;
  inputType: fieldInputTypeEnum;
  inputData: string;
}

const FormDataComponent: React.FC<formDataInterface> = ({
  label,
  inputType,
  inputData,
}) => {
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
