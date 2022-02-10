import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
// Navigation list
export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

// Link for navigation item

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #6d7e83;
  font-size: 30px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #2196f3;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.active {
    color: #2196f3;
  }

  @media screen and (min-width: 767px) {
    padding: 20px 0;
  }
`;
