import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 90%;
  margin-top: -2rem;
  background-color: var(--background-secondary-color);
  z-index: 100;
  padding: 1rem 0.5rem;
  .acc-info-item {
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: center;
    color: white;
    background-color: var(--the-primary-color);
    /* border: 2px solid white; */
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0.5rem 0.5rem;
      font-size: 0.75rem;
      .icon {
        font-size: 1.75rem;
      }
      .text-icon {
        margin-top: 0.75rem;
      }
      .avatar {
        width: 40px;
        height: 40px;
        background-color: white;
        .img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .acc-info-logout {
    display: flex;
    width: 80%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0.5rem;
    font-size: 0.75rem;
    background-color: var(--the-primary-color);
    color: white;
    .text-icon {
      margin-top: 0.5rem;
    }
    .icon {
      font-size: 1.75rem;
    }
  }
`;

export default Wrapper;
