import styled from 'styled-components';

const Wrapper = styled.div`
  .user-address-title {
    background-color: var(--the-primary-color);
    padding: 1rem;
    color: white;
    text-align: center;
    h3 {
      font-size: 1rem;
    }
  }
  .user-address-info {
    padding: 1rem;
    color: var(--text-color);
    .user-address-info-item {
      margin: 1.5rem 0;
      h5 {
        font-size: 0.75rem;
        margin-bottom: 0.5rem;
      }
      h3 {
        font-size: 1rem;
        margin-left: 0.25rem;
      }
    }
  }
`;

export default Wrapper;
