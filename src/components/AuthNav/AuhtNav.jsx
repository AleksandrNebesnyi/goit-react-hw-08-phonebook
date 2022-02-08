import { List, Item, NavLinkStyled } from './AuthNav.styled';

// Компонент меню регистрации и авторизации
export default function AuthNav() {
  return (
    <List>
      <Item>
        <NavLinkStyled
          to={'/register'}
          // className={styles.link}
          // activeClassName={styles['link--active']}
        >
          Sign up
        </NavLinkStyled>
      </Item>

      <Item>
        <NavLinkStyled
          exact
          to={'/login'}
          // className={styles.link}
          // activeClassName={styles['link--active']}
        >
          Log in
        </NavLinkStyled>
      </Item>
    </List>
  );
}
