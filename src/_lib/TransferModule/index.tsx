import { Box, TextField, useTheme } from '@mui/material';
import CarousalComponent from '_lib/CarousalComponent';
import ModuleComponent from '_lib/ModuleComponent';
import { StyledButton, StyledTypographyLight } from '_styledComponents';
import SendIcon from '@mui/icons-material/Send';
import { SwiperSlide } from 'swiper/react';
import { TransferIconComponent } from '_lib';
import { contactInterface } from '_interfaces';
import { ChangeEvent, useEffect, useState } from 'react';
import { getAllContacts, sendMoney } from '_controllers';
import { useAlert } from '_context';

const TransferModule = () => {
  const [contacts, setContacts] = useState<contactInterface[]>([]);
  const [selectedContact, setSelectedContact] =
    useState<contactInterface | null>(null);
  const [amount, setAmount] = useState<number | null>(null);
  const { showError, showSuccess } = useAlert();
  const theme = useTheme();

  const handleAmtChange = (e: ChangeEvent<HTMLInputElement>) => {
    const amt = e.target.value;
    setAmount(Number(amt));
  };

  const selectContact = (contact: contactInterface) => {
    setSelectedContact(contact);
  };

  const handleTransfer = async () => {
    if (!selectedContact || !amount || amount <= 0) return;
    const { success } = await sendMoney({
      amount,
      name: selectedContact.name,
    });
    if (success) {
      showSuccess(`Amount: $${amount} transferred to ${selectedContact.name}`);
      setSelectedContact(null);
      setAmount(null);
    } else {
      showError('Unable to Transfer!!! Please check your balance');
    }
  };
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
                <TransferIconComponent
                  item={item}
                  handleClick={selectContact}
                />
              </SwiperSlide>
            ))}
        </CarousalComponent>
        {selectedContact && (
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
                type="number"
                variant="standard"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                }}
                value={amount}
                onChange={handleAmtChange}
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
                onClick={handleTransfer}
                sx={{
                  borderRadius: '20px', // Rounded button
                  marginLeft: 2, // Add some space between input and button
                }}
              >
                Send
              </StyledButton>
            </Box>
          </Box>
        )}
      </Box>
    </ModuleComponent>
  );
};

export default TransferModule;
