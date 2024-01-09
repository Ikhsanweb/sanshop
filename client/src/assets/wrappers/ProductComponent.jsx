import styled from 'styled-components';

const Wrapper = styled.div`
  .product-item {
    background-color: var(--background-secondary-color);
    padding: 0.5rem;
    padding-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60% 30% 10%;
    height: 250px;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 10px;
    .product-image {
      width: 100%;
      height: 100%;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      .product-img {
        width: 100%;
      }
    }
    .product-info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .product-main-info {
        /* .product-name {
          font-size: 0.95rem;
        }
        .product-brand {
          font-size: 0.75rem;
          margin-top: 0.25rem;
          color: darkgray;
        } */
        .product-name {
          font-size: var(--rf-mobile-normal-one);
          margin-top: 0.5rem;
        }
        .product-brand {
          font-size: var(--rf-mobile-small-two);
          color: darkgray;
        }
      }
      .product-price {
        margin-bottom: 0.15rem;
        font-size: 1rem;
        text-align: right;
      }
    }
    .button-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .btn-add {
        display: flex;
        align-items: center;
        background-color: var(--the-primary-color);
        height: 2.3rem;
        border-radius: 0;
        border: none;
        color: white;
        padding: 0.25rem 0.5rem 0.25rem 0.25rem;
        /* padding: 1rem 0.75rem; */
        font-size: 0.75rem;
        .add-to-cart {
          font-size: 1.75rem;
          /* padding: 1rem 0; */
        }
        span {
          padding: 0;
          font-size: 2rem;
          margin-left: 0.75rem;
        }
      }
    }
    a {
      color: white;
    }
  }
`;
export default Wrapper;
