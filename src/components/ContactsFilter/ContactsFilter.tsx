import { FC } from 'react';
// import { useSelector, useDispatch } from 'react-redux'; // Импортируем хуки для использования стейта и доставки экшинов прямо в компоненте
import { changeFilter } from 'redux/contact/contacts-actions'; // Импортируем экшны для диспатча
import { getFilter } from 'redux/contact/contacts-selector'; // Импортируем части стейта из selector
import { Form, Label, Input } from './ContactsFilter.styled';
// import PropTypes from 'prop-types'; //Стили
import {useAppDispatch, useAppSelector} from '../../hooks'
// Принимает значение с поля фильтра и метод пишущий в стейт

const ContactsFilter:FC = () => {
  const filter = useAppSelector(getFilter);
  const dispatch = useAppDispatch();

  return (
    <>
      <Form>
        <Label>
          <h3>Find contacts by name:</h3>
          <Input
            type="text"
            value={filter}
            onChange={event =>
              dispatch(changeFilter(event.currentTarget.value))
            }
          />
        </Label>
      </Form>
    </>
  );
};
// ContactsFilter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };
export default ContactsFilter;
