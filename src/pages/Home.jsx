import { Container, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Container sx={{ mt: { xs: '5px', sm: '20px' } }}>
      <Typography component="h1" variant="h2" sx={{ textAlign: 'center' }}>
        Hello! Welcome to the Phonebook.
      </Typography>
    </Container>
  );
};

export default HomePage;