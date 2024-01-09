import styled from 'styled-components';

const Wrapper = styled.div`
  .page-wrapper {
    z-index: 100;
  }
  .page-wrapper.color-white {
    color: white;
  }
  .page-wrapper.color-black {
    color: var(--text-grey);
  }
  .page-wrapper.inside {
    position: fixed;
    top: 3.9rem;
    left: 0;
    width: 100%;
  }
  .page-wrapper.bg {
    background-color: var(--background-secondary-color);
  }
  .children-header {
    margin-top: 3.5rem;
  }
  .children-header.no-header {
    margin-top: 0;
  }
`;

export default Wrapper;
