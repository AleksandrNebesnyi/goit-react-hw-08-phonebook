import Section from '../../components/Section/Section.jsx';
import { Container } from './HomePage.styled';
// Компонент главной страницы приложения
export default function HomePage() {
  // Сетит title страницы при маунте компонента
  // useEffect(() => {
  //   document.title = 'Phonebook | React Application';
  // }, []);

  return (
    <main>
      <Container>
        <Section title="Phonebook" />
      </Container>
    </main>
  );
}
