import styled from 'styled-components';

const Wrapper = styled.div`
  .title {
    padding: 1rem;
  }
  .body {
    padding: 0.5rem;
    .order-item {
      margin-bottom: 3rem;
      border: 4px solid crimson;
      color: black;
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
        .order-bottom-status {
          border-top: 4px solid crimson;
          display: flex;
          /* flex-direction: column; */
          align-items: start;
          justify-content: center;
          background-color: crimson;
          .order-bottom-status-status {
            display: flex;
            flex-direction: column;
            width: 100%;
            .order-bottom-status-text {
              margin-bottom: 1rem;
              font-size: 0.95rem;
              text-align: center;
              color: white;
              width: 100%;
              padding-top: 1rem;
            }
            .order-bottom-status-orderstatus {
              color: white;
              font-weight: 700;
              font-size: 1rem;
              text-transform: uppercase;
              text-align: center;
              padding: 1rem;
              margin-bottom: 0.5rem;
            }
            .order-bottom-status-deliverystatus {
              color: white;
              font-weight: 700;
              font-size: 1rem;
              text-transform: uppercase;
              text-align: center;
              padding: 1rem;
            }
          }
        }
      }
    }
  }
`;
export default Wrapper;
