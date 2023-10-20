import styled from 'styled-components';

const Wrapper = styled.div`
  border: 2px solid var(--the-primary-color);
  margin-bottom: 0.5rem;
  .seller-name {
    background-color: var(--the-primary-color);
    color: white;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    h2 {
      font-size: 1rem;
    }
  }
  .products {
    display: flex;
    flex-direction: column;
    padding: 0 0.5rem 0.5rem 0.5rem;
    .product-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.25rem 0;
      .product-name {
        width: 80%;
      }
      .product-quantity {
        min-width: 20%;

        display: flex;
        justify-content: end;
      }
    }
  }
`;
export default Wrapper;
