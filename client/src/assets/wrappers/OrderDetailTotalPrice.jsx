import styled from 'styled-components';

const Wrapper = styled.div`
  border-bottom: 15px solid var(--the-primary-color);
  border-left: 15px solid var(--the-primary-color);
  border-right: 15px solid var(--the-primary-color);
  padding: 1rem;
  display: flex;
  color: var(--text-color);
  justify-content: space-between;
  h5 {
    font-size: 1.5rem;
  }
`;

export default Wrapper;
