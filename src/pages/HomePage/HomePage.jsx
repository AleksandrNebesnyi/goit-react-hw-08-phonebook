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

        {/* <div className={styles.thumb}>
            <HoleImage
              title="Try it now!"
              alt="Blackhole"
              className={styles.image}
            />
          </div> */}

        {/* <p className={styles.text}>
            Fast, Secure and Mobile Friendly React Application
          </p> */}

        {/* <NavLink
            to={routes.contacts}
            className={styles.button}
            title="Try it now!"
            aria-label="Go to contacts"
          >
            Try it now!
          </NavLink> */}
      </Container>
    </main>
  );
}
