import styled from 'styled-components';

const Wrapper = styled.div`
  .title {
    padding: 1rem;
  }
  .order-ordered-products {
    background-color: var(--background-secondary-color);
    margin-bottom: 5rem;
    border: 10px solid var(--the-primary-color);
    .order-item {
      color: black;
      .order-status-info {
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: white;
        padding: 2rem 0;
        .order-status-info-icon {
          font-size: 2rem;
        }
      }
      .order-item-title {
        padding: 1rem;
        background-color: crimson;
        width: 100%;
        color: white;
      }
      .order-item-body {
        .ordered-products {
          display: flex;
          width: 100%;
          border-bottom: 4px solid crimson;
          .left {
            width: 30%;
            padding: 0.5rem;
            .image {
              background-color: crimson;
              width: 100%;
              height: 100%;
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
          background-color: crimson;
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
          border-top: 4px solid crimson;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          h5 {
            font-size: 1.5rem;
          }
        }
        .order-bottom-function {
          border-top: 4px solid crimson;
          padding: 1rem;
          display: flex;
          justify-content: space-around;
        }
        .order-bottom-status {
          border-top: 4px solid crimson;
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
              color: white;
              font-weight: 700;
              font-size: 1rem;
              text-transform: uppercase;
              padding: 1rem;
            }
            .order-bottom-status-deliverystatus {
              color: white;
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
