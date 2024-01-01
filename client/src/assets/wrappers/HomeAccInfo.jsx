import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 85%;
  margin-top: -2rem;
  background-color: var(--background-secondary-color);
  border-radius: var(--border-radius);
  z-index: 100;
  padding: 1rem 0.5rem;
  .acc-info-item {
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: center;
    /* background-color: ; */
    border: 1px solid var(--the-primary-color);
    border-radius: var(--border-radius);
    /* border: 2px solid white; */
    a {
      color: var(--text-color);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0.5rem 0.5rem;
      font-size: 0.75rem;
      .icon {
        font-size: 1.2rem;
      }
      .text-icon {
        margin-top: 0.25rem;
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
    border: 1px solid var(--the-primary-color);
    border-radius: var(--border-radius);

    color: var(--text-color);
    .text-icon {
      margin-top: 0.25rem;
    }
    .icon {
      font-size: 1.5rem;
    }
  }
`;

export default Wrapper;
