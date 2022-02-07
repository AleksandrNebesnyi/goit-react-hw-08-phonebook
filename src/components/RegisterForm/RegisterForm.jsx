import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { authOperations, authSelectors } from '../../redux/auth';

import {
  Form,
  LabelInput,
  Text,
  FormInput,
  ButttonWrapper,
  Button,
} from './RegisterForm.styled';

const initialState = {
  name: '',
  email: '',
  password: '',
};

// Компонент формы регистрации
export default function RegisterForm() {
  const [state, setState] = useState(initialState);
  const { name, email, password } = state;

  //   const isLoading = useSelector(authSelectors.getLoading); // Селектор статуса загрузки
  const isLoading = null;
  const dispatch = useDispatch();

  // Диспатчит операцию регистрации + useCallback
  //   const onRegister = useCallback(
  //     state => {
  //         dispatch(authOperations.register(state));
  //     },
  //     [dispatch],
  //   );

  const hanldeChange = e => {
    const { name, value } = e.target;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const hanldeSubmit = e => {
    e.preventDefault();

    // onRegister(state); // Вызовает операцию регистрации и передает данные из стейта

    resetForm();
  };

  const resetForm = () => {
    setState(initialState);
  };

  return (
    <Form onSubmit={hanldeSubmit}>
      <LabelInput>
        <Text>Name</Text>

        <FormInput
          type="text"
          name="name"
          placeholder="Your name"
          aria-label="Input for your name"
          value={name}
          onChange={hanldeChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          autoComplete="username"
          required
        />
      </LabelInput>

      <LabelInput>
        <Text>Email</Text>

        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={hanldeChange}
          placeholder="Your e-mail"
          aria-label="Input for your Email"
          disabled={isLoading}
          autoComplete="email"
          required
        />
      </LabelInput>

      <LabelInput>
        <Text>Password</Text>

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={hanldeChange}
          placeholder="Should be at least 7 characters"
          aria-label="Input for your password"
          disabled={isLoading}
          autoComplete="new-password"
          required
        />
      </LabelInput>

      <ButttonWrapper>
        <Button type="submit" disabled={isLoading}>
          Create account
        </Button>
      </ButttonWrapper>
    </Form>
  );
}
