// import PropTypes from 'prop-types';
import { Item, Name, Number, Button } from './ContactItem.styled';
import { useDeleteContactMutation } from 'redux/contact/contacts-sliceApi';
import Loader from '../Loader/Loader';
import {IContact} from '../../types/contactTypes';


// Принимает один контакт и метод для удаления контакта

interface Props {
 
 contact:IContact;
  
}

const ContactItem:React.FC<Props> = ( {contact}) => {
  const { id, name, phone } = contact;
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Item  >
      <Name>{name}: </Name>
      <Number href={`tel:${phone}`}>{phone}</Number>
      <Button
        type="button"
        // Метод на клике, принимает ID контакта
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting && <Loader height={20} width={20} />}
        Delete
      </Button>
    </Item>
  );
};

// ContactItem.propTypes = {
//   id: PropTypes.string,
//   name: PropTypes.string,
//   phone: PropTypes.string,
// };

export default ContactItem;
