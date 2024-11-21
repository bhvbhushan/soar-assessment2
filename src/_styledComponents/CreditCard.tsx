// src/components/ThemedCard.tsx
import React, { useState } from 'react';

import { StyledCard } from '_styledComponents';

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

        mr: '1rem',
      }}
    >
      {children(isFocused)}
    </StyledCard>
  );
};
