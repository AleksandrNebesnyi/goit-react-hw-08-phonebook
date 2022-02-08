import styled from '@emotion/styled';

// User menu navigation container
export const Profile = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 10px;

  @media screen and (min-width: 767px) {
    margin-bottom: 0;
  }
`;
export const Thumb = styled.div`
  width: 32px;
  margin-right: 10px;
`;
export const Avatar = styled.img`
  width: 100%;

  border-radius: 50%;

  opacity: 1;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;

    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
// User greetings text
export const WelcomeText = styled.span`
  margin-right: 10px;
`;
export const NameText = styled.span`
  font-weight: 500;
`;
export const Button = styled.button`
  padding: 5px;
  border: 0px solid transparent;
  border-radius: 4px;

  color: #fff;
  background-color: #808080;

  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);

  opacity: 0.8;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 1;

    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
