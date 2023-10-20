import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  /* padding: 1rem 0.5rem; */
  .test-status {
    width: 100%;
    height: 50px;
    background-color: aliceblue;
    margin-top: 1rem;
  }
  .featured {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    background-color: aliceblue;
    h1 {
      margin: 1.5rem 0 0.25rem 1rem;
      font-size: 1.25rem;
    }
    .featured-container {
      display: grid;
      grid-auto-flow: column;

      overflow-x: scroll;
      grid-gap: 0.5rem;
      padding: 0.5rem;
    }
  }
  .all-products {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 1rem;
    margin-bottom: 4rem;
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
