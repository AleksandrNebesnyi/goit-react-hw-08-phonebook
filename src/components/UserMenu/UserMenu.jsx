import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';
import { getUserName } from '../../redux/auht/auth-selector';
import { useLogoutUserMutation } from '../../redux/users/users-sliceApi';
import {
  Profile,
  Thumb,
  Avatar,
  WelcomeText,
  NameText,
  Button,
} from './UserMenu.styled';

// Компонент меню пользователя после авторизации
export default function UserMenu() {
  const name = useSelector(getUserName); // Селектор имя юзера

  const dispatch = useDispatch();
  const [logoutUserHook, { error }] = useLogoutUserMutation();
  // const onLogout = logoutUserHook();
  // Диспатчит операцию выхода из профиля + useCallback
  //   const onLogout = useCallback(
  //     () => dispatch(authOperations.logOut()),
  //     [dispatch],
  //   );

  return (
    <Profile>
      <Thumb>
        <Avatar
          src={`https://eu.ui-avatars.com/api/?background=2196f3&color=fff&&length=1&name=${name}`}
          alt="avatar"
          title="Your avatar"
        />
      </Thumb>

      <WelcomeText>
        Welcome, <NameText>{name}</NameText>
      </WelcomeText>

      <Button
        type="button"
        title="Log out"
        aria-label="Log out"
        onClick={() => {
          logoutUserHook();
        }}
      >
        Logout
      </Button>
    </Profile>
  );
}
