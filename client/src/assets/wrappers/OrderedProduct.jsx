import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  /* border-bottom: 15px solid var(--the-primary-color);
  border-left: 15px solid var(--the-primary-color);
  border-right: 15px solid var(--the-primary-color); */
  .left {
    width: 30%;
    padding: 0.5rem;
    .image {
      width: 100%;
      height: 80px;
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
    height: 100%;
    padding: 1rem;
    color: var(--text-color);
    margin: auto 0;
    h2 {
      font-size: var(--rf-mobile-normal);
    }
    .ordered-products-total {
      margin-top: 0.75rem;
      display: flex;
      justify-content: space-between;
      color: var(--text-color);
      h2 {
        font-size: var(--rf-mobile-large);
      }
      .ordered-products-total-info {
        margin: auto 0;
        display: flex;
        h3 {
          margin-right: 1.5rem;
          font-size: var(--rf-mobile-small);
        }
      }
    }
  }
`;
export default Wrapper;
