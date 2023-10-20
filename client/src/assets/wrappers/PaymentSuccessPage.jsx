import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  justify-items: center;
  align-items: center;
  .body {
    .title {
      color: var(--the-primary-color);
      h1 {
        margin-bottom: 1rem;
      }
      .icon {
        font-size: 5rem;
        color: greenyellow;
        margin-bottom: 2rem;
      }
    }
  }
`;

export default Wrapper;
