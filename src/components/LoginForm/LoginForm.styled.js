import styled from '@emotion/styled';

// Log in form

export const Form = styled.form`
  width: 100%;
  margin: 0 auto 15px;
  padding: 15px;
  border: 1px solid #d4d4d4;
  border-radius: 4px;

  @media screen and (min-width: $tablet) {
    width: 350px;
  }
`;

// Labels on inputs

export const LabelInput = styled.input`
  display: flex;
  flex-direction: column;

  margin-bottom: 15px;

  color: $secondary-color;
`;
// Span text
export const Text = styled.span`
  margin-bottom: 5px;
`;

// Form inputs
export const FormlInput = styled.input`
  padding: 11px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  line-height: normal;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: transparent;
    border: 1px solid #2196f3;
  }
`;

// Log in button container

export const ButtonWrapper = styled.div`
  text-align: center;
`;

// Log in button

export const Button = styled.button`
  min-width: 150px;
  height: 40px;
  border: 0px solid transparent;
  border-radius: 4px;

  color: #fff;
  background-color: #2196f3;

  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);

  opacity: 1;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;

    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:disabled {
    background-color: #808080;
    cursor: auto;
  }
`;

//   .button {
//     min-width: 150px;
//     height: 40px;
//     border: 0px solid transparent;
//     border-radius: 4px;

//     color: $clear-color;
//     background-color: $main-color;

//     box-shadow: $main-shadow;

//     opacity: 1;

//     transition: opacity $transition-duration $timing-function;

//     cursor: pointer;

//     &:hover,
//     &:focus {
//       opacity: 0.8;

//       transition: opacity $transition-duration $timing-function;
//     }

//     &:disabled {
//       background-color: $inactive-color;
//       cursor: auto;
//     }
//   }
