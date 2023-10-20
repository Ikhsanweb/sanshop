import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  .all-products {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
    h1 {
      text-align: center;
      margin: 1rem;
    }
    .products-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 0.5rem;
      padding: 0.5rem;
    }
  }
`;

export default Wrapper;
