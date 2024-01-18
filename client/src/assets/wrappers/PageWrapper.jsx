import styled from 'styled-components';

const Wrapper = styled.div`
  .page-wrapper {
    z-index: 100;
  }
  .page-wrapper.color-white {
    position: fixed;
    top: 3.5rem;
    left: 0;
    width: 100%;
    color: white;
  }
  .page-wrapper.color-white-bg {
    position: fixed;
    top: 3.5rem;
    left: 0;
    width: 100%;
    color: white;
    background-color: var(--background-secondary-color);
  }
  .page-wrapper.color-black {
    position: fixed;
    top: 3.5rem;
    left: 0;
    width: 100%;
    color: var(--text-grey);
  }
  .page-wrapper.color-black-bg {
    position: fixed;
    top: 3.5rem;
    left: 0;
    width: 100%;
    color: var(--text-grey);
    background-color: var(--background-secondary-color);
  }
  .page-wrapper.inside {
    position: fixed;
    top: 3.4rem;
    left: 0;
    width: 100%;
    background-color: var(--background-color);
  }
  .page-wrapper.inside-no-top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--background-color);
  }
  .page-wrapper.color-white-static {
    position: static;
    /* margin-top: 3.5rem; */
    width: 100%;
    color: white;
    /* background-color: var(--background-secondary-color); */
  }
  .page-wrapper.bg {
    position: fixed;
    top: 3.5rem;
    left: 0;
    width: 100%;
    background-color: var(--background-secondary-color);
  }
  .children-header {
    margin-top: 3.5rem;
    margin-top: 4.5rem;
    margin-top: 0;
  }
  .children-header.no-header {
    margin-top: 0;
  }
`;

export default Wrapper;
