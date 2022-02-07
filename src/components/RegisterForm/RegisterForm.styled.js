import styled from '@emotion/styled';

export const Form = styled.form`
  width: 100%;
  margin: 0px auto 15px;
  padding: 15px;
  border: 1px solid $border-color;
  border-radius: 4px;

  @media screen and (min-width: $tablet) {
    width: 350px;
  }
`;
// Labels from inputs
export const LabelInput = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: 15px;

  color: $secondary-color;
`;
// Labels text
export const Text = styled.span`
  margin-bottom: 5px;
`;

// Form inputs
export const FormInput = styled.input`
  padding: 11px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  line-height: normal;

  transition: all $transition-duration $timing-function;

  &:focus {
    outline: transparent;
    border: 1px solid $main-color;
  }
`;

// Sign up container
export const ButttonWrapper = styled.div`
  text-align: center;
`;

// Sign up button
export const Button = styled.button`
  min-width: 150px;
  height: 40px;
  border: 0px solid transparent;
  border-radius: 4px;

  color: $clear-color;
  background-color: $main-color;

  box-shadow: $main-shadow;

  opacity: 1;

  transition: opacity $transition-duration $timing-function;

  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;

    transition: opacity $transition-duration $timing-function;
  }

  &:disabled {
    background-color: $inactive-color;
    cursor: auto;
  }
`;
