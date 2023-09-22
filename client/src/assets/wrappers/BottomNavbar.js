import styled from 'styled-components';

const Wrapper = styled.nav`
  display: block;
  height: 70px;
  width: 100%;
  background: var(--background-secondary-color);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  .nav-links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 0.5rem;
  }
  .nav-link {
    /* background-color: aqua; */
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: padding-left 0.3s ease-in-out;
    color: black;
  }
  .icon {
    font-size: 2rem;
  }
  .text-icon {
    font-size: 0.75rem;
  }
  .active {
    color: var(--primary-500);
    border: 4px solid var(--primary-500);
    border-radius: 20px;
    width: 30%;
    flex-direction: row;
    justify-content: space-around;
    padding: 2px 5px;
    .icon {
      font-size: 1.75rem;
      margin-left: 0.05rem;
    }
    .text-icon {
      font-size: 1.05rem;
      /* margin-left: 0.05rem; */
    }
  }
  .pending {
    background: var(--grey-50);
  }
  @media (min-width: 992px) {
    display: none;
  }
`;
export default Wrapper;
