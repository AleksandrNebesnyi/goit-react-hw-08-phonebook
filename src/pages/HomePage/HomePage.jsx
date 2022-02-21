import Section from '../../components/Section/Section.jsx';
import { Container } from './HomePage.styled';

// Компонент главной страницы приложения

export default function HomePage() {
  return (
    <main>
      <Container>
        <Section title={'Phonebook'} />
      </Container>
    </main>
  );
}
