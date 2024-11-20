import { Box, Button } from '@mui/material';
import { CardComponent } from '_lib';
import { CreditCard, StyledTypographyMain } from '_styledComponents';
import React from 'react';
import styled from 'styled-components';

const CardWrapperComponent = () => {
  return (
    <>
      <StyledCardListWrapper className="sm:w-3/5  w-100%">
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <StyledTypographyMain variant="h6">My Cards</StyledTypographyMain>
          <Button>See All</Button>
        </Box>
        <Box sx={{ display: 'flex', overflow: 'auto', pb: '0.5rem' }}>
          <CreditCard>
            {(isFocussed) => <CardComponent isFocused={isFocussed} />}
          </CreditCard>

          <CreditCard>
            {(isFocussed) => <CardComponent isFocused={isFocussed} />}
          </CreditCard>
        </Box>
      </StyledCardListWrapper>
    </>
  );
};

const StyledCardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CardWrapperComponent;
