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
  border-top: 4px solid rgba(0, 0, 0, 0.123);
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
    /* color: var(--text-color); */
    color: var(--text-grey);

    font-size: 0.75rem;
    .icon {
      font-size: 1.5rem;
      margin-bottom: 0.25rem;
    }
  }
  .active {
    color: var(--the-primary-color);
    /* border-radius: 20px; */
    /* width: 30%; */
    justify-content: space-around;
    padding: 0.25rem 5px;
    transition: padding-left 0.8s ease-in-out;
    .icon {
      font-size: 1.75rem;
      margin-left: 0.05rem;
      margin-bottom: 0;
    }
    .text-icon {
      font-size: 1.05rem;
      margin-bottom: 0;
      /* margin-left: 0.05rem; */
    }
  }
  .pending {
    background: var(--grey-50);
  }
  @media (min-width: 768px) {
    height: 50px;
    .nav-link {
      width: 15%;
      font-size: 0.75rem;
      .icon {
        margin-right: 0.5rem;
        font-size: 1rem;
      }
    }
    .active {
      padding: 0.25rem 0.75rem;
    }
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
export default Wrapper;
