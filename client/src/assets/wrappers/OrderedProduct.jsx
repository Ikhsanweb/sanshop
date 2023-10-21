import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 4px solid var(--the-primary-color);
  .left {
    width: 30%;
    padding: 0.5rem;
    .image {
      width: 100%;
      height: 100px;
      background-color: var(--the-primary-color);
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
    color: var(--text-color);
    .ordered-products-total {
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;
      color: var(--text-color);
      .ordered-products-total-info {
        display: flex;
        h3 {
          margin-right: 0.5rem;
        }
      }
    }
  }
`;
export default Wrapper;
