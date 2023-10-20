import styled from 'styled-components';

const Wrapper = styled.div`
  .header {
    display: flex;
    background-color: var(--background-secondary-color);
    height: 8rem;
    width: 100%;
    padding: 1rem;
    align-items: center;
    justify-content: space-around;
    color: var(--text-color);
    .header-right {
      /* background-color: aliceblue; */
      width: 25%;
      height: 90%;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      .avatar-icon {
        color: white;
        font-size: 4rem;
      }
    }
  }
  .body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    justify-items: center;
    padding: 1rem;
    gap: 1rem;
    .body-item {
      display: flex;
      width: 100%;
      justify-content: space-around;
      background-color: var(--background-secondary-color);
      border: 3px solid var(--the-primary-color);
      padding: 1rem;
      /* color: var(--text-secondary-color); */
      color: var(--text-color);
      .body-item-left {
        width: 70%;
        height: 100%;
        padding-right: 1rem;
        display: flex;
        align-items: center;
      }
      .body-item-right {
        width: 30%;
        height: 100%;
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .avatar {
        width: 100px;
        height: 100px;
      }
    }
  }
`;
export default Wrapper;
