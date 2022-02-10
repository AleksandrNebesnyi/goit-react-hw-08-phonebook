import LoginForm from '../../components/LoginForm/LoginForm';
import Section from '../../components/Section/Section';
import Loader from '../../components/Loader/Loader';
import { useLoginUserMutation } from '../../redux/users/users-sliceApi';

// Компонент страницы автозирации
export default function LoginPage() {
  const [data, { isLoading }] = useLoginUserMutation(); // Селектор статуса загрузки

  // console.log('data', data);
  console.log('isLoading', isLoading);

  return (
    <Section title="Log in to Phonebook">
      <LoginForm />
      {isLoading && <Loader />}
    </Section>
  );
}
