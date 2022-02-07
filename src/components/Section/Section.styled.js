import styled from '@emotion/styled';

export const BoxSection = styled.div`
  /* padding: 15px;
text-align: center; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  /* margin-bottom: 15px; */
  display: inline;
  margin: 10px 0;

  font-size: 1.5rem;

  color: #2196f3;

  opacity: 1;
  transition: opacity 250ms linear;

  cursor: default;

  &:hover,
  &:focus {
    opacity: 0.8;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (min-width: 480px) {
    font-size: 2rem;
  }
`;

// Title react animation
// .appear {
//     transform: translateX(-100%);
//   }

//   .appearActive {
//     transform: translateX(0);
//     transition: all 500ms linear;
//   }
