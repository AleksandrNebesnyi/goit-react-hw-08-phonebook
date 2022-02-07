// import { useSelector } from 'react-redux';

// import { authSelectors } from '../../redux/auth';

// import Navigation from '../Navigation';
// import AuthNav from '../AuthNav';
// import UserMenu from '../UserMenu';

// import {Heder} from './AppBar.styled.js';

// // Компонент хедера приложения (бара)
// export default function AppBar() {
//   const isAuthenticated = useSelector(authSelectors.getIsAuthenticated); // Селектор статуса авторизации юзера

//   return (
//     <Header>
//       <Navigation />
//       {isAuthenticated ? <UserMenu /> : <AuthNav />}
//     </Header>
//   );
// }