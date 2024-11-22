import { Badge, BadgeProps, styled } from '@mui/material';

export const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  '& .MuiBadge-badge': {
    borderRadius: '50%',
    padding: '0.8rem 0.4rem',
  },
}));
