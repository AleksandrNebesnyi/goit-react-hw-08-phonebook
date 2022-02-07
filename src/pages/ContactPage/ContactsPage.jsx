import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter';
import { useFetchContactsQuery } from '../../redux/contact/contacts-sliceApi';
import Loader from 'components/Loader/Loader';

// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import Alert from '@material-ui/lab/Alert';

// import ContactForm from '../../components/ContactForm';
// import Filter from '../../components/Filter';
// import ContactsList from '../../components/ContactsList';
// import Loader from '../../components/Loader';

// import { contactsOperations, contactsSelectors } from '../../redux/contacts';

// Компонент страницы контактов
export default function ContactsPage() {
  const { data, isFetching } = useFetchContactsQuery();
  //   const dispatch = useDispatch();

  //   const isLoadingContacts = useSelector(state =>
  //     contactsSelectors.getLoading(state),
  //   ); // Селектор статуса загрузки из контактов
  //   const isError = useSelector(state => contactsSelectors.getError(state)); // Селектор статуса ошибки из контактов

  //   // Фетч за контактами при маунте
  //   useEffect(() => {
  //     dispatch(contactsOperations.fetchContacts());
  //   }, [dispatch]);

  //   // Сетит title страницы при маунте компонента
  //   useEffect(() => {
  //     document.title = 'Contacts list | Phonebook';
  //   }, []);

  return (
    <main>
      <ContactForm />
      {data && data.length >= 2 && <ContactsFilter />}
      <ContactList />
      {isFetching && <Loader />}

      {/* {isError && <Alert severity="error">{isError}</Alert>} */}
    </main>
  );
}
