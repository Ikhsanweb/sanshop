import styled from 'styled-components';

const Wrapper = styled.div`
  .user-address-title {
    background-color: var(--the-primary-color);
    padding: 1rem;
    color: white;
    text-align: center;
  }
  .user-address-info {
    padding: 1rem;
    color: var(--text-color);
    .user-address-info-item {
      margin: 1rem 0;
    }
  }
`;

export default Wrapper;
