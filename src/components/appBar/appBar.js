import { AuthNav } from 'components/autNav/authNav';
import { Navigation } from 'components/navigation/navigation';
import { UserMenu } from 'components/userMenu/userMenu';
import { useAuth } from 'hooks/userAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
