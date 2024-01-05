import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: max-content;
  border: 1px solid var(--the-primary-color);
  border-radius: var(--border-radius);
  margin-bottom: 1.5rem;
  /* margin-top: 0.5rem; */
  .checkout-item-header {
    /* background-color: var(--the-primary-color); */
    padding: 1rem;
    margin-bottom: 0.5rem;
    color: var(--text-color);
    font-size: var(--rf-mobile-large);
  }
  .checkout-item-body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .checkout-item-product {
      display: flex;
      flex-direction: column;
      width: 95%;
      // border-top: 5px solid var(--the-primary-color);
      justify-content: center;
      .checkout-item-product-container {
        display: flex;
        align-items: center;
        .image-container {
          // height: 100%;
          width: 25%;
          margin: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          .product-img {
            /* height: fit-content; */
            width: 100%;
          }
        }
        .product-info-container {
          width: 70%;
          height: 100%;
          display: flex;
          /* padding: 1rem 0; */
          /* background-color: aqua; */
          .checkout-item-product-name-price {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            text-align: left;
            font-size: var(--rf-mobile-normal);
            margin-right: 10px;
            .checkout-item-product-name {
              font-size: var(--rf-mobile-normal);
              margin-left: 1rem;
              span {
                font-size: 1.5rem;
              }
            }
          }
        }
        .checkout-item-quantity-container {
          /* width: 40%; */
          /* height: 100%; */
          /* height: max-content; */
          font-size: var(--rf-mobile-large);
          display: flex;
          align-items: stretch;
          justify-content: space-around;
          .checkout-item-quantity-text {
            /* display: flex; */
            /* padding-bottom: 10px; */
            /* flex-direction: column; */
            text-align: center;
            margin: auto 0;
            margin-right: 0.25rem;
            font-size: var(--rf-mobile-large);
            /* height: 100%; */
          }
          .checkout-item-quantity {
            margin: 0 0.5rem;
            display: flex;
            width: 100%;
            height: 100%;
            flex-direction: column;
            // align-items: stretch;
            justify-content: center;
            margin-right: 1rem;
            .checkout-item-quantity-icon {
              font-size: 2rem;
              margin: 0.25rem 0;
            }
          }
          .remove-button {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
            .remove-button-span {
              border: 1px solid var(--text-color);
              color: var(--text-color);
              border-radius: var(--border-radius);
              padding: 0.35rem 0.25rem 0.25rem 0.25rem;
              .remove-button-icon {
                font-size: 1.5rem;
              }
            }
          }
        }
      }
    }
    .total-price {
      font-size: var(--rf-mobile-large);
      text-align: left;
      margin: 1rem;
      margin-top: -0.5rem;
    }
  }
`;

export default Wrapper;
