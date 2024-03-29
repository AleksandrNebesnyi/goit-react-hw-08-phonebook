
import {  useState } from 'react';
import { useRegisterUserMutation } from '../../redux/users/users-sliceApi';

import {
  Form,
  LabelInput,
  Text,
  FormInput,
  ButttonWrapper,
  Button,
} from './RegisterForm.styled';




interface IData  {
  name:string,
  email:string,
  password:string,
}

// Компонент формы регистрации
export default function RegisterForm() {
  const initialState = {
    name: sessionStorage.getItem('name') ?? '',
    email: sessionStorage.getItem('email') ?? '',
    password: '',
  };
  const [state, setState] = useState(initialState);
  const { name, email, password } = state;

  const [registerUserHook, { isLoading }] = useRegisterUserMutation();

  const hanldeChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const hanldeSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    const onSubmit = async (data:IData ) => {
      registerUserHook({
        name,
        email,
        password,
      });
    };

    onSubmit(state); // Вызовает операцию регистрации и передает данные из стейта

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
