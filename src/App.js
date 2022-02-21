import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'components/Container/Container.jsx';
import AppBar from './components/AppBar/AppBar.jsx';
import Loader from './components/Loader/Loader.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import PublicRoute from './components/PublicRoute/PublicRoute.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetUserQuery } from './redux/users/users-sliceApi';
import { usersApi } from './redux/users/users-sliceApi';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage.jsx' /* webpackChunkName: "home-page" */),
);

const ContactsPage = lazy(() =>
  import(
    './pages/ContactPage/ContactsPage.jsx' /* webpackChunkName: "contacts-page" */
  ),
);
const LoginPage = lazy(() =>
  import(
    './pages/LoginPage/LoginPage.jsx' /* webpackChunkName: "login-page" */
  ),
);
const RegisterPage = lazy(() =>
  import(
    './pages/RegisterPage/RegisterPage.jsx' /* webpackChunkName: "register-page" */
  ),
);

const App = () => {
  const { data } = usersApi.endpoints.getUser.useQuery();
  const { isError } = useGetUserQuery();
  console.log(data);
  console.log('errrrr', isError);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="register"
            element={
              <PublicRoute
                element={<RegisterPage />}
                redirectTo="/contacts"
                restricted
              />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute
                element={<LoginPage />}
                redirectTo="/contacts"
                restricted
              />
            }
          />

          <Route
            path="contacts/*"
            element={
              <PrivateRoute element={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Routes>
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
};
export default App;
