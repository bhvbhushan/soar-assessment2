import { Box } from '@mui/material';
import {
  ModuleWrapper,
  StyledCard,
  StyledTypographyMain,
} from '_styledComponents';
import React from 'react';

interface moduleCompProps {
  primaryHeader: string;
  btnComp?: React.ReactElement;
  children: React.ReactElement;
  singleChildCard?: boolean;
  width: string;
}

const ModuleComponent: React.FC<moduleCompProps> = ({
  primaryHeader,
  btnComp,
  children,
  singleChildCard = true,
  width,
}) => {
  return (
    <ModuleWrapper width={width}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <StyledTypographyMain variant="h6">
          {primaryHeader}
        </StyledTypographyMain>
        {btnComp}
      </Box>
      <Box
        sx={{
          display: 'flex',
          overflow: 'auto',
          pb: '0.5rem',
          height: '100%',
          width: '100%',
        }}
      >
        {singleChildCard ? <StyledCard> {children}</StyledCard> : children}
      </Box>
    </ModuleWrapper>
  );
};

export default ModuleComponent;
