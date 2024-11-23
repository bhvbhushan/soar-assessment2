import React, {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  Dispatch,
} from 'react';
import { CustomAlert } from '_lib';

// Define possible alert severities
type Severity = 'success' | 'error' | 'warning' | 'info';

// Define the shape of the alert state
interface AlertState {
  open: boolean;
  message: string;
  severity: Severity;
}

// Define action types
type Action =
  | { type: 'SHOW_ALERT'; payload: { message: string; severity: Severity } }
  | { type: 'HIDE_ALERT' };

// Define the context type, including helper functions
interface AlertContextType {
  state: AlertState;
  dispatch: Dispatch<Action>;
  showSuccess: (message: string) => void;
  showError: (message: string) => void;
}

// Create the context with default values
const AlertContext = createContext<AlertContextType>({
  state: { open: false, message: '', severity: 'success' },
  dispatch: () => undefined,
  showSuccess: () => {},
  showError: () => {},
});

// Reducer function to handle state transitions
const alertReducer = (state: AlertState, action: Action): AlertState => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return {
        open: true,
        message: action.payload.message,
        severity: action.payload.severity,
      };
    case 'HIDE_ALERT':
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

// Provider component
export const AlertProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(alertReducer, {
    open: false,
    message: '',
    severity: 'success',
  });

  // Function to show success alert
  const showSuccess = (message: string) => {
    dispatch({ type: 'SHOW_ALERT', payload: { message, severity: 'success' } });
  };

  // Function to show error alert
  const showError = (message: string) => {
    dispatch({ type: 'SHOW_ALERT', payload: { message, severity: 'error' } });
  };

  // Function to handle closing the snackbar
  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({ type: 'HIDE_ALERT' });
  };

  return (
    <AlertContext.Provider value={{ state, dispatch, showSuccess, showError }}>
      {children}
      <CustomAlert
        open={state.open}
        severity={state.severity}
        handleClose={handleClose}
        message={state.message}
      />
    </AlertContext.Provider>
  );
};

// Custom hook for accessing the AlertContext
export const useAlert = () => useContext(AlertContext);
