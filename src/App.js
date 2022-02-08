import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Container from 'components/Container/Container.jsx';
import AppBar from './components/AppBar/AppBar.jsx';
import Loader from './components/Loader/Loader.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import PublicRoute from './components/PublicRoute/PublicRoute.jsx';
// import ContactsPage from 'pages/ContactPage/ContactsPage.jsx';
// import Section from 'components/Section/Section.jsx';
// import ContactForm from 'components/ContactForm/ContactForm.jsx';
// import ContactList from 'components/ContactList/ContactList.jsx';
// import ContactsFilter from 'components/ContactsFilter/ContactsFilter.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    './pages/LoginPage/LoadingPage.jsx' /* webpackChunkName: "login-page" */
  ),
);
const RegisterPage = lazy(() =>
  import(
    './pages/RegisterPage/RegisterPage.jsx' /* webpackChunkName: "register-page" */
  ),
);

const App = () => {
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
        </Routes>
      </Suspense>

      {/* <Suspense fallback={<Loader />}>
        <Routes>
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
            path="contacts/*"
            element={
              <PrivateRoute element={<ContactsPage />} redirectTo="/login" />
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense> */}

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

/* <PublicRoute path="/register" restricted redirectTo={'/contacts'}>
            <RegisterPage />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo={'/contacts'}>
            <LoginPage />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo={'/login'}>
            <ContactsPage />
          </PrivateRoute> */
