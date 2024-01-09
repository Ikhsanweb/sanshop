import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid var(--the-primary-color);
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  display: flex;
  color: var(--text-color);
  /* background-color: cyan; */
  .stLayer-left {
    width: 3%;
    height: 100%;
  }
  .stLayer-right {
    /* background-color: lime; */
    width: 97%;
    height: 100%;
    .ndLayer-top {
      width: 100%;
      height: 20%;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      .ndLayer-top-left {
        display: flex;
        flex-direction: column;
        font-size: var(--rf-mobile-small-three);
        padding-left: 0.5rem;
      }
      .ndLayer-top-right {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.25rem;
        font-weight: 900;
        .order-day {
          margin-right: 0.25rem;
        }
        .order-month {
          margin-right: 0.25rem;
          transform: skewX(-10deg);
          color: var(--the-primary-color);
        }
        .order-year {
        }
      }
    }
    .ndLayer-mid {
      /* background-color: crimson; */
      width: 100%;
      height: 55%;
      .ndLayer-mid-top {
        height: 34%;
        /* width: 100%; */
        /* background-color: crimson; */
        display: flex;
        flex-direction: column;
        .order-seller-container {
          display: flex;
          justify-content: space-between;
          .order-length {
            margin-right: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .order-seller {
            padding-left: 0.5rem;
            display: flex;
            margin-bottom: 0.15rem;
            align-items: center;
            .seller-name {
              font-size: var(--rf-mobile-small-two);
            }
            .order-seller-icon {
              background-color: var(--the-primary-color);

              /* padding: 0.25rem; */
              width: 20px;
              border-radius: var(--border-radius);
              height: 20px;
              margin-right: 0.5rem;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
        .order-length {
          margin-left: 0.5rem;
          /* margin-top: 1rem; */
          font-size: var(--rf-mobile-small-three);
        }
      }
      .ndLayer-mid-down {
        height: 66%;
        /* background-color: coral; */
        margin-top: -0.25rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .ndLayer-mid-down-top {
          display: flex;
          padding-left: 0.5rem;
          .orderedProducts-image-container {
            height: 40px;
            /* width: 40px; */
            max-width: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            margin-right: 0.5rem;
            img {
              height: 100%;
            }
          }
          .orderedProducts-image-container-plus {
            /* background-color: crimson; */
            display: flex;
            justify-content: center;
            align-items: center;
            .order-plus {
              padding: 0.25rem;
              border-radius: var(--border-radius);
              border: 1px solid var(--text-grey);
              /* background-color: cyan; */
              display: flex;
              justify-content: center;
              align-items: center;
              .order-number {
                display: flex;
                height: 100%;
                justify-content: center;
                align-items: center;
                /* background-color: aqua; */
                margin-left: 0.25rem;
                font-size: var(--rf-mobile-small-two);
              }
            }
          }
        }
        .ndLayer-mid-down-down {
          display: flex;
          padding-left: 0.5rem;
          align-items: center;
          margin: 0.125rem 0;
          .orderedProducts-name-container {
            margin-top: 0.15rem;
            margin-right: 0.5rem;
            font-size: var(--rf-mobile-small-two);
          }
        }
      }
    }
    .ndLayer-down {
      /* background-color: cyan; */
      width: 100%;
      height: 25%;
      display: flex;
      justify-content: flex-end;
      .order-total {
        width: 40%;
        /* background-color: yellowgreen; */
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        padding-left: 0.5rem;
        .order-total-title {
          font-size: var(--rf-mobile-supersmall);
          text-transform: uppercase;
        }
        .order-total-price {
          margin-top: 0.25rem;
          font-size: var(--rf-mobile-normal-three);
        }
      }
      .order-detail-status-status {
        width: 30%;
        /* background-color: lime; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .order-detail-status-text {
          font-size: var(--rf-mobile-supersmall);
        }
        .order-detail-status-deliverystatus {
          padding: 0.35rem 0.35rem;
          text-transform: uppercase;
          margin-top: 0.15rem;
          border-radius: var(--border-radius);
          font-size: var(--rf-mobile-small-two);
        }
        .order-detail-status-orderstatus {
          padding: 0.35rem 0.35rem;
          text-transform: uppercase;
          margin-top: 0.15rem;
          border-radius: var(--border-radius);
          font-size: var(--rf-mobile-small-two);
        }
      }
    }
  }
`;
