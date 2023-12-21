import { useAuth } from 'hooks/userAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/author/operation';
import { Button } from '@mui/material';
import { Div, P } from './userMenu.sryled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Div>
      <P>Welcome, {user.name} </P>
      <Button
        type="button"
        variant="contained"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Div>
  );
};
