import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  width: 100%;
  .seller-product {
    margin-bottom: 3rem;
    width: 100%;
    .product-item {
      background-color: var(--background-secondary-color);
      border: 4px solid var(--the-primary-color);
      border-bottom: none;
      padding: 1rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 65% 25% 10%;
      height: 300px;
      width: 100%;
      .product-image {
        width: 100%;
        height: 100%;
        background-color: crimson;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        .avatar {
        }
      }
      .product-info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 1rem 0;
        .product-main-info {
          .product-name {
            font-size: 1.25rem;
          }
          .product-brand {
            font-size: 0.85rem;
            color: darkgray;
          }
        }
        .product-price {
          margin-bottom: 0.5rem;
        }
      }
      a {
        color: white;
      }
    }
    .seller-product-buttons {
      display: flex;
      width: 100%;
      font-size: 1.5rem;
      justify-content: space-around;
      border-bottom: 4px solid var(--the-primary-color);
      background-color: var(--background-secondary-color);
      padding: 1rem 0;
      .seller-product-buttons-link {
        width: 40%;
        height: 3rem;
        background-color: var(--the-primary-color);
        display: flex;
        justify-content: center;
        padding: 0;
        align-items: center;
        font-size: 1rem;
        .seller-product-buttons-link-text {
        }
      }
    }
  }
`;

export default Wrapper;
