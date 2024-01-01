import styled from 'styled-components';

const Wrapper = styled.div`
  .page-wrapper.inside {
    position: fixed;
    top: 4rem;
    left: 0;
    width: 100%;
  }
  .page-wrapper.bg {
    background-color: var(--background-secondary-color);
  }
  .children-head {
    margin-top: 4rem;
  }
`;

export default Wrapper;
