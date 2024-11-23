import React, {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  Dispatch,
} from 'react';
import { userDataInterface } from '_interfaces';

// Define the shape of the context state
interface UserState {
  user: userDataInterface | null;
}

// Define action types
type Action =
  | { type: 'SET_USER'; payload: userDataInterface | null }
  | { type: 'UPDATE_USER'; payload: Partial<userDataInterface> };

// Define the context type
interface UserContextType {
  state: UserState;
  dispatch: Dispatch<Action>;
}

// Create the context with default values
const UserContext = createContext<UserContextType>({
  state: { user: null },
  dispatch: () => undefined,
});

// Reducer function to handle state transitions
const userReducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case 'SET_USER':
      return { user: action.payload };
    case 'UPDATE_USER':
      return { user: state.user ? { ...state.user, ...action.payload } : null };
    default:
      return state;
  }
};

// Provider component
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(userReducer, { user: null });

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for accessing the UserContext
export const useUser = () => useContext(UserContext);
