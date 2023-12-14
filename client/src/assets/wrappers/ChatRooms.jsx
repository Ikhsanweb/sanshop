import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 84vh;
  .top {
    display: flex;
    height: 5%;
    width: 100%;
    background-color: var(--background-secondary-color);
    justify-content: end;
    align-items: center;
    .help-center {
      font-size: 1.5rem;
      margin-right: 1rem;
    }
  }
  .body-chatrooms {
    height: 95%;
    overflow-y: scroll;
  }
`;
export default Wrapper;
