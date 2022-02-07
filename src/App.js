import { lazy, Suspence } from 'react';
import { Routes } from 'react-router-dom';

import Container from 'components/Container/Container.jsx';
import AppBar from './components/AppBar/AppBar.jsx';
import Loader from 'components/Loader/Loader';
import PrivatRoute from './components/PrivatRoute/PrivetRoute.jsx';
import PublicRoute from 'components/PablicRoute/PablicRoute.jsx';
import Section from 'components/Section/Section.jsx';
import ContactForm from 'components/ContactForm/ContactForm.jsx';
import ContactList from 'components/ContactList/ContactList.jsx';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <Suspence fallback={<Loader />}>
        <Routes>
          <PublicRoute path="/register" restricted redirectTo={'/contacts'}>
            <RegisterPage />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo={'/contacts'}>
            <LoginPage />
          </PublicRoute>
          <PrivatRoute path="/contacts" edirectTo={'/login'}>
            <ContactsPage />
          </PrivatRoute>
        </Routes>
      </Suspence>

      {/* <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <ContactsFilter />
        <ContactList />
      </Section> */}
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
