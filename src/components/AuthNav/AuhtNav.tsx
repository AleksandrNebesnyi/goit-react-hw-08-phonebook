
import { List, Item, NavLinkStyled } from './AuthNav.styled';

// Компонент меню регистрации и авторизации
export default function AuthNav() {
  return (
    <List>
      <Item>
        <NavLinkStyled to={'/register'}>Sign up</NavLinkStyled>
      </Item>

      <Item>
        <NavLinkStyled to={'/login'}>Log in</NavLinkStyled>
      </Item>
    </List>
  );
}
