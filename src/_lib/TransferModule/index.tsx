import { Box, Button, TextField, useTheme } from '@mui/material';
import CarousalComponent from '_lib/CarousalComponent';
import ModuleComponent from '_lib/ModuleComponent';
import { StyledTypographyLight } from '_styledComponents';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';

const TransferModule = () => {
  const theme = useTheme();
  return (
    <ModuleComponent primaryHeader="Quick Transfer" width={'40%'}>
      <Box
        sx={{
          p: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          height: '100%',
        }}
      >
        <CarousalComponent />
        <Box
          display={'flex'}
          sx={{ justifyContent: 'center', alignItems: 'center', gap: 5 }}
        >
          <StyledTypographyLight variant="caption">
            Write Amount
          </StyledTypographyLight>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: '20px', // Rounded corners
              backgroundColor: '#e0e0e0', // Light gray background
              pl: '1rem',
              width: '300px', // Adjust width as needed
            }}
          >
            <TextField
              label=""
              variant="standard"
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              // value={amount}
              // onChange={handleChange}
              sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: 'transparent', // Transparent input background
                  border: 'none', // Remove default border
                },
                '& .MuiInputBase-input': {
                  color: theme.palette.primary.light, // Change to desired color
                },
                marginRight: 'auto', // Push the button to the right
              }}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              // onClick={handleSubmit}
              sx={{
                backgroundColor: 'black', // Black button background
                borderRadius: '20px', // Rounded button
                padding: '10px 20px', // Adjust padding as needed
                marginLeft: 2, // Add some space between input and button
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </ModuleComponent>
  );
};

export default TransferModule;
