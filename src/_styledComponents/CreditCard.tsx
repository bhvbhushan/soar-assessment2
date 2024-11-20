// src/components/ThemedCard.tsx
import React, { useState } from 'react';
import { Card, styled } from '@mui/material';

const StyledCard = styled(Card)(() => ({
  display: 'flex',
  transition: 'background-color 0.3s, color 0.3s',
  outline: 'none',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

export const CreditCard: React.FC<{
  children: (isFocused: boolean) => React.ReactNode;
}> = ({ children }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <StyledCard
      tabIndex={0}
      onFocus={handleFocus}
      onBlur={handleBlur}
      sx={{
        minWidth: '340px',
        maxHeight: {
          xs: '300px',
        },
        width: {
          xs: '85%',
          sm: '80%',
          md: '340px',
        },

        borderRadius: '25px',
        mr: '1rem',
      }}
    >
      {children(isFocused)}
    </StyledCard>
  );
};
