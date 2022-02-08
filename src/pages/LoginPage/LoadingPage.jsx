import LoginForm from '../../components/LoginForm/LoginForm';
import Section from '../../components/Section/Section';

// Компонент страницы автозирации
export default function LoginPage() {
  // const isLoading = useSelector(authSelectors.getLoading); // Селектор статуса загрузки

  // Сетит title страницы при маунте компонента
  // useEffect(() => {
  //   document.title = 'Log in to App | Phonebook';
  // }, []);

  return (
    <Section title="Log in to Phonebook">
      <LoginForm />
      {/* {isLoading && <Loader />} */}
    </Section>
  );
}
