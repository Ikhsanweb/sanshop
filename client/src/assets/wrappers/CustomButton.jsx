import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1rem;
  padding: 0%.25rem 1rem;
  border: 3px solid black;
  margin: 1rem;
  color: black;
  a {
    color: black;
  }
`;

export const BlackButton = styled(Button)`
  color: white;
  background-color: black;
  border-color: none;
`;

export const RedButton = styled(Button)`
  color: white;
  font-size: 1.25rem;
  background-color: red;
  border-color: none;
`;
