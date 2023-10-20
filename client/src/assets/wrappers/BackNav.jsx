import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  .back-arrow {
    margin-left: 1rem;
    font-size: 1.5rem;
    border: 1px solid var(--the-primary-color);
    padding: 0.25rem 0.5rem;
  }
  .title {
    margin-left: 1rem;
    font-size: 1.5rem;
  }
`;
export default Wrapper;
