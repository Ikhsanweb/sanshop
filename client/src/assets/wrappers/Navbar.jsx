import styled from 'styled-components';

const Wrapper = styled.nav`
  height: var(--nav-height);
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);
  z-index: 120;
  .nav-center {
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: space-between;
  }
  .nav-form-row {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
    .search-bar {
      width: 12rem;
    }
    button {
      background: var(--the-primary);
      height: 35px;
      border: 2px solid var(--the-primary);
      color: white;
      font-weight: 600;
      border-radius: 0;
      padding: 0.25rem 0.4rem;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      .submit-icon {
        font-size: 1rem;
      }
    }
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: none;
    align-items: center;
  }
  .logo-text {
    display: none;
  }
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  @media (min-width: 768px) {
    .search-bar {
      width: 18rem;
    }
  }
  @media (min-width: 1024px) {
    position: fixed;
    top: 0;
    .toggle-btn {
      display: flex;
      margin-left: 2rem;
    }
    .nav-center {
      width: 90%;
      .nav-form-row {
        .search-bar {
          width: 30rem;
        }
      }
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;
export default Wrapper;
