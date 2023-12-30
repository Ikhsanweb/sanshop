import styled from 'styled-components';

export const ShoppingIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const CartIconContainer = styled.div`
  font-size: 1.5rem;
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 1rem;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 12.5px;
  font-weight: bold;
  right: 5px;
  bottom: 25px;
  background-color: white;
  color: var(--text-secondary-color);
  padding: 1.25px 2.5px;
  border-radius: 50%;
`;
