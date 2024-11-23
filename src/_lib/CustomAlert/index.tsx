import { Alert, AlertColor, Snackbar } from '@mui/material';

import React from 'react';

interface props {
  open: boolean;
  message: string;
  handleClose: () => void;
  severity?: AlertColor;
}
const CustomAlert = ({
  open,
  message,
  handleClose,
  severity = 'error',
}: props) => {
  const onCloseHandler = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    handleClose();
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      onClose={onCloseHandler}
      autoHideDuration={2000}
    >
      <Alert
        onClose={onCloseHandler}
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
