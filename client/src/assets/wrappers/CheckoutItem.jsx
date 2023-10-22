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
    font-size: 1rem;
  }
  .checkout-item-body {
  }
  .checkout-item-product-container {
    display: flex;
    border-top: 5px solid var(--the-primary-color);
    .image-container {
      height: 100px;
      width: 25%;
      margin: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      .product-img {
        width: 100%;
      }
    }
    .product-info-container {
      width: 70%;
      .checkout-item-product-name-price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1rem;
        margin-right: 10px;
      }
    }
  }
  .checkout-item-product-name {
    font-size: 1rem;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 10px;
  }
  .checkout-item-quantity-container {
    width: 100%;
    height: max-content;
    margin: 10px 10px 10px 10px;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .checkout-item-quantity {
    margin: 0 10px;
    /* display: flex; */
    padding-bottom: 10px;
    flex-direction: column;
    /* height: 100%; */
  }
  .remove-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid var(--the-primary-color);
    color: crimson;
    margin-right: 25px;
    padding: 0 0.5rem 0.5rem 0.5rem;
  }
`;

export default Wrapper;
