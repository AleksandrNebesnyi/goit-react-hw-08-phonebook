import { useAppSelector } from '../../hooks';
import { authUser } from '../../redux/auht/auth-selector';
import { Header } from './AppBar.styled.js';
import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuhtNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { FC } from 'react';

// Компонент хедера приложения (бара)

 const AppBar:FC =()=>{
  const isAuthenticated = useAppSelector(authUser); // Селектор статуса авторизации юзера
  console.log('isAuthenticated-AppBar', isAuthenticated);

  return (
    <Header>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}

// export default function AppBar() {
//   const isAuthenticated = useAppSelector(authUser); // Селектор статуса авторизации юзера
//   console.log('isAuthenticated-AppBar', isAuthenticated);

//   return (
//     <Header>
//       <Navigation />
//       {isAuthenticated ? <UserMenu /> : <AuthNav />}
//     </Header>
//   );
// }

export default AppBar;