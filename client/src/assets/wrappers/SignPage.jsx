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
      .logo {
        width: 100%;
        height: 4rem;
        margin-bottom: 2.5rem;
      }
      .second-title {
        margin-top: 1rem;
        font-size: var(--rf-mobile-small);
        color: var(--text-grey);
        text-transform: none;
      }
      h2 {
        margin-bottom: 1rem 0;
        font-size: var(--rf-mobile-normal);
      }
      span {
        font-size: var(--rf-mobile-small);
      }
    }
    width: 100%;
    min-height: 100%;
    display: grid;
    align-items: center;
    justify-items: center;

    a {
      color: var(--text-color);
      text-decoration: underline;
    }
    .additional-info {
      .additional-info-h4 {
        font-size: var(--rf-mobile-small);
      }
    }
    .btn.second-button {
      margin-top: 1rem;
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
