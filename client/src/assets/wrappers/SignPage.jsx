import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem;
  .container {
    .top-container {
      text-align: center;
      margin-bottom: 3rem;
      font-size: 1rem;
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
      color: black;
      text-decoration: underline;
    }
  }
`;

export default Wrapper;
