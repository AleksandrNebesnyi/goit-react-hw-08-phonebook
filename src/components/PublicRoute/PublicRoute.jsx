import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authUser } from '../../redux/auht/auth-selector';
import { toast } from 'react-toastify';

// - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на указанный роут
// - В противном случае рендерит компонент
// Компонент публичного роута
// export default function PublicRoute({
//   children,
//   restricted = false,
//   redirectTo = '/',
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authUser); // Селектор статуса авторизации
//   console.log(isLoggedIn);
//   const shouldRedirect = isLoggedIn && restricted;

//   return (
//     <Route {...routeProps}>
//       {shouldRedirect ? <Navigate to={redirectTo} /> : children}
//     </Route>
//   );
// }

export default function PublicRoute({
  redirectTo,
  restricted = false,
  element,
}) {
  const auth = useSelector(authUser);
  if (!redirectTo && restricted) {
    toast.error('No path for redirect');
    return <Navigate to="/" />;
  }

  return <>{auth && restricted ? <Navigate to={redirectTo} /> : element}</>;
}
// export default function PublicRoute({
//   children,
//   restricted = false,
//   redirectTo = '/',
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   const shouldRedirect = isLoggedIn && restricted;
//   return (
//     <Route {...routeProps}>
//       {shouldRedirect ? <Redirect to={redirectTo} /> : children}
//     </Route>
//   );
// }
