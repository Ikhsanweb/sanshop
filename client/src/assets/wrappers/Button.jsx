import styled from 'styled-components';
import { SpinnerContainer } from './Spinner';

export const BaseButton = styled.button`
  min-width: 165px;
  width: 100%;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: var(--the-primary-color);
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  a {
    color: white;
  }

  &:hover {
    background-color: white;
    color: crimson;
    border: 1px solid black;
    a {
      color: var(--the-primary-color);
    }
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: var(--the-primary-color);
  border: 1px solid black;
  a {
    color: var(--the-primary-color);
  }
  &:hover {
    background-color: var(--the-primary-color);
    color: white;
    border: none;
    a {
      color: white;
    }
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
