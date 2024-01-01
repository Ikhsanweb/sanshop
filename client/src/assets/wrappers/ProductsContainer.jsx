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
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: 1fr;
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
      .featured-title {
        border: 1px solid var(--the-primary-color);
        border-radius: var(border-radius);
        margin: 1rem;
        margin-right: 2rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        color: var(--text-color);
        h1 {
          margin: 0;
          text-align: center;
        }
        h4 {
          margin-top: 1rem;
          text-align: end;
          font-size: var(--rf-mobile-small);
        }
        .featured-icon {
          font-size: 4rem;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--the-primary-color);
        }
      }
    }
  }
  .all-products {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 0.5rem;
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
  @media (min-width: 1024px) {
    .all-products {
      .products-container {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
    }
  }
`;
export default Wrapper;
