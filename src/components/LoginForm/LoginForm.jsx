import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  LabelInput,
  Text,
  FormlInput,
  ButtonWrapper,
  Button,
} from './LoginForm.styled';

// Компонент формы авторизации
export default function LoginForm() {
  const initialState = {
    email: '',
    password: '',
  };
  const [state, setState] = useState(initialState);
  const { email, password } = state;
  const isLoading = null;

  //   const isLoading = useSelector(authSelectors.getLoading); // Селектор статуса загрузки

  const dispatch = useDispatch();

  // Диспатчит операцию входа + useCallback
  //   const onLogin = useCallback(
  //     state => {
  //       dispatch(authOperations.logIn(state));
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

    // onLogin(state); // Вызов функции операции входа и передает данные из стейта

    resetForm();
  };

  const resetForm = () => {
    setState(initialState);
  };

  return (
    <Form onSubmit={hanldeSubmit}>
      <LabelInput>
        <Text>Email</Text>

        <FormlInput
          type="email"
          name="email"
          value={email}
          onChange={hanldeChange}
          placeholder="Your e-mail"
          aria-label="Input for your email"
          disabled={isLoading}
          autoComplete="email"
          required
        />
      </LabelInput>

      <LabelInput>
        <Text>Password</Text>

        <FormlInput
          type="password"
          name="password"
          value={password}
          onChange={hanldeChange}
          placeholder="Your password"
          aria-label="Input for your password"
          disabled={isLoading}
          autoComplete="current-password"
          required
        />
      </LabelInput>

      <ButtonWrapper>
        <Button type="submit" disabled={isLoading}>
          Log in
        </Button>
      </ButtonWrapper>
    </Form>
  );
}
