import styled from 'styled-components';

const Wrapper = styled.div`
  .product-item {
    background-color: var(--background-secondary-color);
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60% 40%;
    height: 250px;
    width: 300px;
    box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 8px;
    .product-image {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .product-img {
        height: 100%;
      }
    }
    .product-info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .product-main-info {
        .product-name {
          font-size: var(--rf-mobile-normal);
          margin-top: 0.5rem;
        }
        .product-brand {
          font-size: var(--rf-mobile-small);
          color: darkgray;
        }
      }
      .product-bottom-holder {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .product-price {
          /* margin-bottom: 0.5rem; */
        }
        .button-container {
          display: flex;
          /* justify-content: end; */
          align-items: end;
          .btn-add {
            display: flex;
            align-items: center;
            /* background: var(--the-primary-color); */
            border-radius: var(--border-radius);
            border: 1px solid var(--the-primary-color);
            color: var(--text-color);
            /* padding: 0.1rem 0.25rem 0.1rem 0.5rem; */
            padding: 0.01rem 0.5rem;

            span {
              padding: 0;
              font-size: 2rem;
              margin-left: 0.75rem;
              color: var(--the-primary-color);
            }
          }
        }
      }
    }

    a {
      color: white;
    }
  }
  @media (min-width: 1024px) {
    .product-item {
      height: 250px;
      width: 300px;
      .product-info {
      .product-main-info {
        .product-name {
          font-size: 1rem;
          margin-top: 0.5rem;
        }
        .product-brand {
          font-size: 0.65rem;
          color: darkgray;
        }
      }
      .product-bottom-holder {
        .product-price {
          font-size: 1rem;
        }
      }
    }
  }
`;
export default Wrapper;
