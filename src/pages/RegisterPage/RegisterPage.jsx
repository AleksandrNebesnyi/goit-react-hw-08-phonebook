import RegisterForm from '../../components/RegisterForm/RegisterForm';

import Section from 'components/Section/Section';
import Loader from 'components/Loader/Loader';
import { useRegisterUserMutation } from 'redux/users/users-sliceApi';

// Компонент страницы регистрации
export default function RegisterPage() {
  const [{ isLoading }] = useRegisterUserMutation(); // Селектор статуса загрузки

  return (
    <Section title="Create your account">
      <RegisterForm />
      {isLoading && <Loader />}
    </Section>
  )}