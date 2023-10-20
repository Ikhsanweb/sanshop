import styled from 'styled-components';

const Wrapper = styled.div`
  .product-item {
    background-color: var(--background-secondary-color);
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60% 30% 10%;
    height: 300px;
    width: 100%;
    .product-image {
      width: 100%;
      height: 100%;
      background-color: crimson;
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
        .product-name {
          font-size: 1.25rem;
        }
        .product-brand {
          font-size: 0.85rem;
          /* color: darkgray; */
        }
      }
      .product-price {
        margin-bottom: 0.5rem;
      }
    }
    .button-container {
      display: flex;
      justify-content: end;
      .btn-add {
        display: flex;
        align-items: center;
        background-color: var(--the-primary-color);
        border-radius: 0;
        border: none;
        color: white;
        padding: 0.1rem 0.25rem 0.1rem 0.5rem;
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
