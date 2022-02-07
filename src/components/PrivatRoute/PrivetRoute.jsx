import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authUser } from '../../redux/auht/auth-selector';

// - Если маршрут приватный и пользователь залогинен, рендерит компонент
// - В противном случае рендерит Redirect на указанный роут
// Компонент публичного роута
export default function PrivetRoute({ redirectTo, children, ...routeProps }) {
  const isLoggedIn = useSelector(authUser); // Селектор статуса авторизации

  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
        children
      ) : (
        <Navigate to={redirectTo} />
      )}
    </Route>
  );
}
