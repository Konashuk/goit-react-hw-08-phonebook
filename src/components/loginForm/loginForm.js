import { useDispatch } from 'react-redux';
import { logIn } from 'redux/author/operation';
import { TextField, Button, Container } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          type="email"
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />

        <TextField
          type="password"
          name="password"
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />

        <Button type="submit" variant="outlined">
          Log In
        </Button>
      </form>
    </Container>
  );
};
