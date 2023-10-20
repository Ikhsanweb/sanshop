import styled from 'styled-components';
import { BaseButton, GoogleSignInButton, InvertedButton } from './Button';

export const CartDropdownContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 260px;
  height: 380px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: var(--background-secondary-color);
  top: 90px;
  right: 25px;

  ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
    margin-top: auto;
    font-size: 12px;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  z-index: 100;
`;

export const CartItems = styled.div`
  height: 260px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  scroll-behavior: smooth;
`;
