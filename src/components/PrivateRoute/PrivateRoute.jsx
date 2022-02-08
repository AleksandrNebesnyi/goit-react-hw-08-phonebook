import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authUser } from '../../redux/auht/auth-selector';
import { toast } from 'react-toastify';

// * 1. Он должен повторять API Route
// *  2. Он должен рендерить Route
// * - Если маршрут приватный и пользователь залогинен, рендерит компонент
// * - В противном случае рендерит Redirect на redirectT
// - Если маршрут приватный и пользователь залогинен, рендерит компонент
// - В противном случае рендерит Redirect на указанный роут
// Компонент публичного роута
// export default function PrivateRoute({
//   children,
//   redirectTo = '/',
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authUser); // Селектор статуса авторизации

//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Navigate to={redirectTo} />}
//     </Route>
//   );
// }
export default function PrivateRoute({ element, redirectTo }) {
  const auth = useSelector(authUser);
  if (!redirectTo) {
    toast.error('No path for redirect');
    return <Navigate to="/" />;
  }
  return <>{auth ? element : <Navigate to={redirectTo} />}</>;
}
