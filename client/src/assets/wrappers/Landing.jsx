import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 95vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50% 50%;
  align-items: center;
  justify-items: center;
  padding: 2rem;
  .top-container {
    display: grid;
    width: 80%;
    align-items: center;
    justify-items: center;
    .title {
      font-size: var(--rf-mobile-large);
      margin-top: 1rem;
    }
    img {
      height: 3rem;
    }
  }
  .bottom-container {
    width: 80%;
  }

  @media (min-width: 768px) {
    .top-container {
      width: 60%;
      .title {
        font-size: var(--rf-tab-large);
        margin-top: 0.5rem;
      }
    }
    .bottom-container {
      width: 60%;
    }
  }

  @media (min-width: 1024px) {
    .top-container {
      width: 35%;
      .title {
        font-size: var(--rf-fs-large);
      }
    }
    .bottom-container {
      width: 35%;
    }
  }
`;
export default Wrapper;
