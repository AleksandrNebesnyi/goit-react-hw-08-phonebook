import { useSelector } from 'react-redux';
import { authUser } from '../../redux/auht/auth-selector';
import { Header } from './AppBar.styled.js';
import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuhtNav';
import UserMenu from 'components/UserMenu/UserMenu';

// Компонент хедера приложения (бара)
export default function AppBar() {
  const isAuthenticated = useSelector(authUser); // Селектор статуса авторизации юзера
  //   console.log(isAuthenticated);

  return (
    <Header>
      <Navigation/>
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
