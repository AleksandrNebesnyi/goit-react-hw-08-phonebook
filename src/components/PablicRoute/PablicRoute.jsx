import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authUser } from '../../redux/auht/auth-selector';

// - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на указанный роут
// - В противном случае рендерит компонент
// Компонент публичного роута
export default function PublicRoute({ redirectTo, children, ...routeProps }) {
  const isLoggedIn = useSelector(authUser); // Селектор статуса авторизации

  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
        <Navigate to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}
