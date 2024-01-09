import styled from 'styled-components';

export const Wrapper = styled.div`
  /* background-color: cyan; */
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin-bottom: 4rem;
  .delivery-status {
    color: var(--background-color);
    padding: 1rem;
    /* background-color: bisque; */
    margin-top: -4.5rem;
    display: flex;
    width: 100%;
    padding-top: 5.5rem;
    padding-bottom: 6rem;
    z-index: -100;
    .left {
      /* background-color: coral; */
      width: 60%;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      .delivery-status-title {
        text-transform: uppercase;
        font-size: var(--rf-mobile-small);
      }
      .delivery-status-text {
        text-transform: uppercase;
        font-size: 1.75rem;
      }
    }
    .right {
      /* background-color: crimson; */
      width: 40%;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
    }
  }
  .order-info {
    background-color: var(--background-color);
    /* background-color: cyan; */
    width: 95%;
    z-index: 10;
    margin-top: -4rem;
    padding: 1rem;
    padding-bottom: 0.5rem;
    .order-title {
      margin-bottom: 1rem;
      font-weight: 600;
      font-size: var(--rf-mobile-normal);
    }
    .body {
      /* padding: 0 0.5rem 0 0.25rem; */
      font-size: var(--rf-mobile-small-two);
      .info-item {
        margin: 0.5rem 0;
        display: flex;
        justify-content: space-between;
        .info-item-title {
        }
        .info-item-text {
          text-transform: uppercase;
          font-weight: 600;
        }
      }
    }
  }
  .ordered-products {
    display: flex;
    /* background-color: cyan; */
    flex-direction: column;
    width: 95%;
    padding: 1rem;
    padding-bottom: 0;
    .order-seller {
      display: flex;
      align-items: center;
      .order-seller-icon {
        margin-right: 1rem;
        background-color: var(--the-primary-color);
        display: flex;
        height: 20px;
        width: 20px;
        justify-content: center;
        align-items: center;
        border-radius: var(--border-radius);
      }
      .order-seller-name {
        display: flex;
      }
    }
    .body {
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 1rem;
      .ordered-product {
        display: flex;
        /* background-color: cyan; */
        /* padding: 0.5rem; */
        margin: 0.5rem 0;
        .left {
          width: 25%;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          border-radius: var(--border-radius);
          img {
            height: 100%;
            width: fit-content;
          }
        }
        .right {
          width: 75%;
          height: 100%;
          /* background-color: cyan; */
          display: grid;
          /* flex-direction: column; */
          padding-left: 1rem;
          /* align-items: stretch; */
          align-content: space-between;
          .product-name {
            font-size: var(--rf-mobile-normal-two);
          }
          .product-quantity {
            font-size: var(--rf-mobile-supersmall);
            color: var(--text-grey);
          }
          .product-price {
            font-weight: 600;
          }
        }
      }
    }
  }
  .total {
    width: 95%;
    padding: 1rem;
    margin-top: -0.5rem;
    font-size: var(--rf-mobile-small-two);
    .total-info {
      /* background-color: cyan; */
      display: flex;
      justify-content: space-between;
      margin: 0.5rem 0;
      .left {
        text-transform: capitalize;
      }
      .right {
        font-weight: 600;
      }
    }
  }
  .customer-info {
    background-color: var(--background-color);
    /* background-color: cyan; */
    width: 95%;
    z-index: 10;
    padding: 1rem;
    padding-bottom: 0.5rem;
    .order-title {
      margin-bottom: 1rem;
      font-weight: 600;
      font-size: var(--rf-mobile-normal);
    }
    .body {
      /* padding: 0 0.5rem 0 0.25rem; */
      font-size: var(--rf-mobile-small-two);
      .info-item {
        margin: 0.5rem 0;
        display: flex;
        justify-content: space-between;
        text-transform: capitalize;
        .info-item-title {
        }
        .info-item-text {
          text-transform: capitalize;
          font-weight: 600;
        }
      }
    }
  }
  .track-order {
    background-color: var(--background-color);
    /* background-color: cyan; */
    width: 95%;
    z-index: 10;
    padding: 1rem;
    padding-bottom: 0.5rem;
    .order-title {
      margin-bottom: 1rem;
      font-weight: 600;
      font-size: var(--rf-mobile-normal);
    }
    .body {
      display: grid;
      grid-template-columns: 1fr;
      color: lightgrey;
      .track-order-item {
        /* background-color: cyan; */
        display: flex;
        .left {
          width: 10%;
          /* background-color: coral; */
          display: flex;
          flex-direction: column;
          /* padding-top: 1rem; */
          .check-icon {
            margin: 0 auto;
            font-size: 1.5rem;
            z-index: 100;
          }
          .check-line {
            width: 5px;
            height: 30px;
            background-color: lightgrey;
            margin: 0 auto;
            margin-top: -0.5rem;
          }
        }
        .right {
          width: 90%;
          /* background-color: crimson; */
          display: flex;
          margin-top: 0.125rem;
          display: flex;
          justify-content: space-between;
          text-transform: capitalize;
          .check-status {
            margin-left: 1rem;
            font-size: var(--rf-mobile-normal-two);
            display: flex;
            flex-direction: column;
            .check-status-text {
              font-weight: 600;
            }
            .check-status-date {
              font-size: var(--rf-mobile-small);
              margin-top: 0.25rem;
              color: darkgrey;
            }
          }
          .check-status-icon {
            font-size: 1.5rem;
            /* margin-top: 0.5rem; */
          }
        }
      }
    }
  }
  .order-function {
    /* background-color: cyan; */
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    margin-top: 1rem;
    .order-bottom {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .order-bottom-function {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        form {
          width: 100%;
          .order-button {
            border: none;
            width: 100%;
            display: inline-block;
            padding: 1rem;
            color: white;
            text-transform: uppercase;
            font-weight: 700;
          }
        }
      }
    }
  }
`;
