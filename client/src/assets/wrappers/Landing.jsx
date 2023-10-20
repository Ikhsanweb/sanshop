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
    align-items: center;
    justify-items: center;
    .title {
      font-size: 2rem;
      margin-top: 1rem;
    }
    img {
      height: 3rem;
    }
  }
  .bottom-container {
    width: 100%;
  }
`;
export default Wrapper;
