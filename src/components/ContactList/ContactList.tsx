import { shallowEqual } from 'react-redux'; // Импортируем хуки для использования стейта и доставки экшинов прямо в компоненте
import {useAppSelector} from '../../hooks'
import { getFilter } from 'redux/contact/contacts-selector'; // Импортируем части стейта из selector
import { useEffect } from 'react';
import { List } from './ContactList.styled'; //Стили
import ContactItem from '../ContactItem/ContactItem'; //Компонент одного контакта
import { useFetchContactsQuery } from 'redux/contact/contacts-sliceApi';
import Loader from '../Loader/Loader';
import { toast } from 'react-toastify';
// Принимает все отфильтрованные контакты и пробрасывает дальше метод для удаления контакта
// import { IContact} from '../../types/contactTypes'
const ContactList:React.FC = () => {
  const { data: contacts, isFetching, error } = useFetchContactsQuery();
 
  const filter =useAppSelector(getFilter, shallowEqual);

  useEffect(() => {
    if (error) toast.error(` Error loading contact `);
  }, [error]);

   

  


  const filteredContacts = () => {

    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };
  console.log("contactsList",filteredContacts());
  return (
    <List>
      {contacts &&
        filteredContacts()?.map(contact => (
          <ContactItem key={contact.id}  contact={contact} />
        ))}
      {isFetching && <Loader height={100} width={100} />}
    </List>
  );
};

export default ContactList;
