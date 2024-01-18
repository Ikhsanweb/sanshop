import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  /* padding-bottom: 6rem; */
  margin-bottom: 6rem;
  margin-top: 4.5rem;
  .checkout-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 6rem;
    width: 100%;
    background-color: var(--background-secondary-color);
    /* border-top: 4px solid var(--the-primary-color); */
    display: flex;
    align-items: center;
    justify-content: center;
    .checkout-total {
      width: 60%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: end;
      justify-content: center;
      padding-right: 1rem;
      .total-text {
        font-size: var(--rf-mobile-normal-one);
        font-weight: 700;
      }
      .total-number {
        font-size: 1.5rem;
      }
    }
    .checkout-button {
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 2rem;
      button {
        margin: auto 0;
      }
    }
  }
`;

export default Wrapper;
