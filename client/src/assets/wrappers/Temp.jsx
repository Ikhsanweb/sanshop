import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;
  h1 {
    /* color: var(--the-primary-color); */
  }
  .temp-text {
    margin: 2rem;
  }
  .home-btn {
    font-size: var(--rf-mobile-large);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border: 1px solid var(--the-primary-color);
    border-radius: var(--border-radius);
    /* color: var(--the-primary-color); */
  }
`;
export default Wrapper;
