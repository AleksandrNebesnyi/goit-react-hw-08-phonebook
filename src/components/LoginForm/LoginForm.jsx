import { useState } from 'react';
import { useLoginUserMutation } from '../../redux/users/users-sliceApi';
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
    email: localStorage.getItem('email') ?? '',
    password: '',
  };
  const [state, setState] = useState(initialState);
  const { email, password } = state;

  //   const isLoading = useSelector(authSelectors.getLoading); // Селектор статуса загрузки
  const [loginUserHook, { isLoading }] = useLoginUserMutation();

  const hanldeChange = e => {
    const { name, value } = e.target;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const hanldeSubmit = e => {
    e.preventDefault();
    const onSubmit = data => {
      loginUserHook({ email, password });
    };

    onSubmit(state); // Вызов функции операции входа и передает данные из стейта

    resetForm();
  };

  const resetForm = () => {
    setState(initialState);
  };

  return (
    <div>
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
    </div>
  );
}
