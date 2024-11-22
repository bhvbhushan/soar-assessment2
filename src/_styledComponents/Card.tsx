import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { dimension } from '_constants';

interface styledCardInterface {
  width?: dimension;
  isFullScreen?: boolean;
}

export const StyledCard = styled(Card)<styledCardInterface>(
  ({ theme, width = '100%', isFullScreen = false }) => ({
    display: 'flex',
    flex: 1,
    transition: 'background-color 0.3s, color 0.3s',
    outline: 'none',

    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '25px',
    width: width,
    overflowY: 'auto',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxHeight: isFullScreen ? null : '400px',
    },
  })
);
