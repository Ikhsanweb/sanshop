import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 95vh;
  margin: auto 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50% 50%;
  align-items: center;
  justify-items: center;
  padding: 2rem;
  .top-container {
    display: grid;
    height: 30%;
    width: 80%;
    align-items: center;
    justify-items: center;
    .title {
      line-height: normal;
      font-size: var(--rf-mobile-large);
      font-weight: 600;
      margin-top: 1.25rem;
    }
    .second-title {
      line-height: normal;
      margin-top: 1rem;
      text-align: center;
      font-size: var(--rf-mobile-small);
      color: var(--text-grey);
    }
    img {
      height: 3rem;
    }
  }
  .bottom-container {
    height: 45%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
      width: 100%;
      .sign-up-button {
        background-color: var(--the-primary-color);
        border: 5px solid var(--the-primary-color);
        height: 30px;
        width: 100%;
        margin-bottom: 1rem;
        border-radius: 3px;
        padding: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: var(--rf-mobile-normal);
      }
    }
    a {
      width: 100%;
      .sign-in-button {
        background-color: var(--background-color);
        border: 1px solid var(--the-primary-color);
        height: 20px;
        width: 100%;
        margin-bottom: 1rem;
        border-radius: 5px;
        padding: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: var(--rf-mobile-normal);

        color: var(--text-color);
      }
    }
  }
  @media (min-width: 768px) {
    min-height: 95vh;
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
