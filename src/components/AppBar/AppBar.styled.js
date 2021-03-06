import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  padding: 20px;
  border-bottom: 1px solid #d4d4d4;

  @media screen and (min-width: 767px) {
    flex-direction: row;

    padding: 0;
  }
`;
