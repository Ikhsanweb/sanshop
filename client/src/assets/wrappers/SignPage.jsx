import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem 3.5rem;
  .container {
    .top-container {
      text-align: center;
      margin-bottom: 3rem;
      font-size: var(--rf-mobile-normal);
      h2 {
        margin: 0.5rem 0;
      }
    }
    width: 100%;
    min-height: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    .logo {
      width: 100%;
      height: 4rem;
    }
    a {
      color: var(--text-color);
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    padding: 3rem 8rem;
    width: 80%;
    margin: 0 auto;
    .top-container {
      font-size: var(--rf-tab-normal);
    }
    .bottom-container {
    }
  }

  @media (min-width: 1024px) {
    width: 60%;
    margin: 0 auto;
    .container {
      .top-container {
        // font-size: var(--rf-full-normal);
        h2 {
          font-size: var(--rf-tab-large);
        }
      }
      .bottom-container {
      }
      .logo {
        width: 80%;
        height: 4rem;
      }
    }
  }
`;

export default Wrapper;
