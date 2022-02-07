import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Section from 'components/Section/Section';

// Компонент страницы регистрации
export default function RegisterPage() {
  //   const isLoading = useSelector(authSelectors.getLoading); // Селектор статуса загрузки

  // Сетит title страницы при маунте компонента
  //   useEffect(() => {
  //     document.title = 'Create account | Phonebook';
  //   }, []);

  return (
    <Section title="Create your account">
      <RegisterForm />
      {/* {isLoading && <Loader />} */}
    </Section>
  );
}
