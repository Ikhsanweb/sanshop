import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  border: 5px solid var(--the-primary-color);
  margin-bottom: 1rem;
  .checkout-item-header {
    background-color: var(--the-primary-color);
    padding: 1rem;
    color: var(--text-color);
  }
  .checkout-item-body {
  }
  .checkout-item-product-container {
    display: flex;
    border-top: 5px solid var(--the-primary-color);
    .image-container {
      height: 100%px;
      width: 25%;
      background-color: var(--the-primary-color);
      margin: 0.5rem;
    }
    .product-info-container {
      width: 70%;
      .checkout-item-product-name-price {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  .checkout-item-product-name {
    font-size: 1.5rem;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .checkout-item-quantity-container {
    width: 100%;
    margin: 10px 10px 10px 10px;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .checkout-item-quantity {
    margin: 0 10px;
  }
  .remove-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid crimson;
    color: crimson;
    margin-right: 15px;
    padding: 0 0.5rem 0.5rem 0.5rem;
  }
`;

export default Wrapper;
