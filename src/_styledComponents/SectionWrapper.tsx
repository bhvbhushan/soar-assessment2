import { Box, styled } from '@mui/material';

interface sectionWrapperInterface {
  CompHeight?: string;
}

export const SectionWrapper = styled(Box)<sectionWrapperInterface>(
  ({ theme, CompHeight }) => ({
    display: 'flex',
    columnGap: 20,
    flexDirection: 'row',
    // minHeight: height,
    width: '100%',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up('sm')]: {
      height: CompHeight,
    },
  })
);
