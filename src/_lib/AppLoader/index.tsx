import {
  Container,
  Typography,
  Backdrop,
  CircularProgress,
} from '@mui/material';
interface props {
  loaderMsg?: string;
}

const AppLoader = ({ loaderMsg }: props) => {
  return (
    <>
      <Backdrop
        sx={{
          color: 'success',
          zIndex: (theme: { zIndex: { drawer: number } }) =>
            theme.zIndex.drawer + 1,
        }}
        open={true}
      >
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <CircularProgress color="inherit" sx={{ mb: 3 }} />
          {loaderMsg && (
            <Typography variant="h3">
              {loaderMsg || 'Fetching Data...'}
            </Typography>
          )}
        </Container>
      </Backdrop>
    </>
  );
};

export default AppLoader;
