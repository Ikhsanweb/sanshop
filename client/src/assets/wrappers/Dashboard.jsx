import styled from 'styled-components';

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 3rem;
  }
  .dashboard-page {
    width: 100vw;
    margin: 0 auto;
    padding: 0.5rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 99%;
      margin-top: 0.25rem;
    }
  }
`;
export default Wrapper;
