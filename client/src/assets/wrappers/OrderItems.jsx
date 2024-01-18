import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  /* background-color: red; */
  .title {
    padding: 1rem;
  }
  .body {
    padding: 1rem;
    display: grid;
    width: 100%;
    margin-bottom: 0rem;
    margin-top: 3.5rem;
    // grid-template-columns: 1fr;
    // grid-auto-flow: row dense;
    .order-item {
      margin-bottom: 3rem;
      border: 1px solid var(--the-primary-color);
      border-radius: var(--border-radius);
      color: var(--text-color);
      background-color: var(--background-secondary-color);
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
            // .image {
            //   background-color: var(--the-primary-color);
            //   width: 100%;
            //   height: 100%;
            //   display: flex;
            //   align-items: center;
            //   justify-content: center;
            //   overflow: hidden;
            //   .product-img {
            //     width: 100%;
            //   }
            // }
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
          border-bottom: 5px solid var(--the-primary-color);
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
        .order-bottom-status {
          border-top: 4px solid var(--the-primary-color);
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          .order-bottom-status-status {
            .order-bottom-status-text {
              margin-bottom: 1rem;
              font-size: 0.95rem;
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
