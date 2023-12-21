import { AuthNav } from 'components/autNav/authNav';
import { Navigation } from 'components/navigation/navigation';
import { UserMenu } from 'components/userMenu/userMenu';
import { useAuth } from 'hooks/userAuth';
import { Header } from './appBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
