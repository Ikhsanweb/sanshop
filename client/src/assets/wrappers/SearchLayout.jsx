import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .search-bar {
    .search-form-row {
      .top {
        height: 40px;
        width: 100%;
        font-size: 1.5rem;
        margin-top: 0.5rem;
        display: grid;
        grid-template-columns: 10% 60% 15% 15%;
        .back-arrow {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: var(--the-primary-color);
          padding: 0.375rem 0.75rem;
        }
        .form-input {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .search-submit-button {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--the-primary-color);
          color: var(--text-color);
        }
      }
      .search-links {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
        .button-container {
          width: 100%;
          height: 40px;
          background-color: var(--background-secondary-color);
          display: flex;
          align-items: center;
          justify-content: center;
          .button-item {
            color: white;
            font-size: 1.15rem;
            background: none;
            text-transform: capitalize;
            border: none;
          }
        }
        .active {
          background-color: var(--the-primary-color);
          .button-item {
            color: var(--text-color);
          }
        }
      }
    }
  }
`;

export default Wrapper;
