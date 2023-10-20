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
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: padding-left 0.8s ease-in-out;
    color: var(--text-color);
  }
  .icon {
    font-size: 2rem;
  }
  .text-icon {
    font-size: 0.75rem;
  }
  .active {
    color: var(--text-color);
    border: 4px solid var(--the-primary-color);
    /* border-radius: 20px; */
    width: 30%;
    flex-direction: row;
    justify-content: space-around;
    padding: 0.25rem 5px;
    transition: padding-left 0.8s ease-in-out;
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