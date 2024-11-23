import { Box, TextField, useTheme } from '@mui/material';
import CarousalComponent from '_lib/CarousalComponent';
import ModuleComponent from '_lib/ModuleComponent';
import { StyledButton, StyledTypographyLight } from '_styledComponents';
import SendIcon from '@mui/icons-material/Send';
import { SwiperSlide } from 'swiper/react';
import { TransferIconComponent } from '_lib';
import { contactInterface } from '_interfaces';
import { contactData } from '_constants';
import { useEffect, useState } from 'react';
import { getAllContacts } from '_controllers';
import { useAlert } from '_context';

const carouselItems: contactInterface[] = contactData;

const TransferModule = () => {
  const [contacts, setContacts] = useState<contactInterface[]>([]);
  const { showError } = useAlert();
  const theme = useTheme();

  useEffect(() => {
    const getContacts = async () => {
      const { success, data } = await getAllContacts();
      if (success) {
        setContacts(data as contactInterface[]);
      } else {
        const message = 'Error Fetching Contacts';
        showError(message);
      }
    };
    getContacts();
  }, []);
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
        <CarousalComponent>
          {contacts.length > 0 &&
            contacts.map((item, index) => (
              <SwiperSlide key={index}>
                <TransferIconComponent item={item} />
              </SwiperSlide>
            ))}
        </CarousalComponent>
        <Box
          display={'flex'}
          sx={{ justifyContent: 'center', alignItems: 'center', gap: 5 }}
        >
          <StyledTypographyLight variant="body1">
            Write Amount
          </StyledTypographyLight>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: '20px', // Rounded corners
              backgroundColor: theme.palette.secondary.main, // Light gray background
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
            <StyledButton
              endIcon={<SendIcon />}
              // onClick={handleSubmit}
              sx={{
                borderRadius: '20px', // Rounded button
                marginLeft: 2, // Add some space between input and button
              }}
            >
              Send
            </StyledButton>
          </Box>
        </Box>
      </Box>
    </ModuleComponent>
  );
};

export default TransferModule;
