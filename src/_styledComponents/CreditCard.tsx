// src/components/ThemedCard.tsx
import React, { useState } from 'react';
import { Card, styled } from '@mui/material';

interface StyledCardProps {
  isFocused: boolean;
}

const StyledCard = styled(Card)<StyledCardProps>(({ theme, isFocused }) => ({
  background: isFocused
    ? 'linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)'
    : theme.palette.background.paper,
  color: isFocused
    ? theme.palette.background.paper
    : theme.palette.text.primary,
  transition: 'background-color 0.3s, color 0.3s',
  outline: 'none',
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
      isFocused={isFocused}
      sx={{
        minWidth: '340px',
        width: {
          xs: '85%',
          sm: '80%',
          md: '340px',
        },
        p: '1rem',
        borderRadius: '25px',
        mr: '1rem',
      }}
    >
      {children(isFocused)}
    </StyledCard>
  );
};
