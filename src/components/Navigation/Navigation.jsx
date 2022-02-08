import { useSelector } from 'react-redux';
import { authUser } from '../../redux/auht/auth-selector';
// import { NavLink } from 'react-router-dom';
import { List, Item, NavLinkStyled } from './Navigation.styled';

// Компонент главной навигации (меню) приложения
export default function Navigation() {
  const isAuthenticated = useSelector(authUser); // Селектор статуса авторизации юзера

  return (
    <nav>
      <List>
        <Item>
          <NavLinkStyled
            to={'/'}
            // className={styles.link}
            // activeClassName={styles['link--active']}
          >
            Home
          </NavLinkStyled>
        </Item>

        {isAuthenticated && (
          <Item>
            <NavLinkStyled
              to={'/contacts'}
              //   className={styles.link}
              //   activeClassName={styles['link--active']}
            >
              Contacts
            </NavLinkStyled>
          </Item>
        )}
      </List>
    </nav>
  );
}
