import styled from 'styled-components';

const Wrapper = styled.div`
  .title {
    padding: 1rem;
  }
  .order-ordered-products {
    padding: 0.5rem;
    background-color: var(--background-secondary-color);
    .order-item {
      margin-bottom: 3rem;
      border: 4px solid var(--the-primary-color);
      color: var(--text-color);
      background-color: var(--background-secondary-color);
      .order-status-info {
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: var(--text-color);
        padding: 2rem 0;
        .order-status-info-icon {
          font-size: 2rem;
        }
      }
      .order-item-title {
        padding: 1rem;
        background-color: var(--the-primary-color);
        width: 100%;
        color: white;
      }
      .order-item-title-order-item-title {
        border-bottom: 5px solid var(--the-primary-color);
        padding: 1rem;
        color: white;
        text-align: center;
        .order-item-order-item {
          /* text-align: center; */
        }
      }
      .order-item-body {
        .ordered-products {
          display: flex;
          width: 100%;
          border-bottom: 4px solid var(--the-primary-color);
          .left {
            width: 30%;
            padding: 0.5rem;
            .image {
              width: 100%;
              height: 100px;
              background-color: transparent;
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              .product-img {
                // height: 100%;
                width: 100%;
              }
            }
          }
          .right {
            width: 70%;
            padding: 1rem;
            .ordered-products-total {
              margin-top: 1rem;
              display: flex;
              justify-content: space-between;
              .ordered-products-total-info {
                display: flex;
                h3 {
                  margin-right: 0.5rem;
                }
              }
            }
          }
        }
      }
      .user-address {
        .user-address-title {
          background-color: var(--the-primary-color);
          padding: 1rem;
          color: white;
          text-align: center;
        }
        .user-address-info {
          padding: 1rem;
          .user-address-info-item {
            margin: 1rem 0;
          }
        }
      }
      .order-bottom {
        .order-bottom-total {
          border-top: 4px solid var(--the-primary-color);
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          h5 {
            font-size: 1.5rem;
          }
        }
        .order-bottom-function-title {
          border-top: 4px solid var(--the-primary-color);
          padding: 1rem;
          text-align: center;
        }
        .order-bottom-function {
          border-top: 1px solid var(--the-primary-color);
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .seller-feedback-status {
            font-size: 1rem;
            text-align: center;
          }
        }
        .order-bottom-status {
          border-top: 4px solid var(--the-primary-color);
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          .order-bottom-status-status {
            .order-bottom-status-text {
              margin-bottom: 1rem;
              font-size: 0.75rem;
              text-align: center;
            }
            .order-bottom-status-orderstatus {
              color: var(--text-color);
              font-weight: 700;
              font-size: 1rem;
              text-transform: uppercase;
              padding: 1rem;
            }
            .order-bottom-status-deliverystatus {
              color: var(--text-color);
              font-weight: 700;
              font-size: 1rem;
              text-transform: uppercase;
              padding: 1rem;
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
