import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  .back-arrow {
    margin-left: 1rem;
    font-size: 1.5rem;
    border: 0.5px solid var(--the-primary-color);
    padding: 0.25rem 0.5rem;
    color: var(--the-primary-color);
    font-weight: 400;
  }
  .back-arrow.color-white {
    border-color: white;
    color: white;
  }
  .back-arrow.color-black {
    border-color: var(--text-grey);
    color: var(--text-grey);
  }
  .title {
    margin-left: 1rem;
    font-size: 1rem;
  }
`;
export default Wrapper;
