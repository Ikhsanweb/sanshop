import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: var(--background-secondary-color);
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  .time {
    margin-top: 0.25rem;
    text-align: end;
  }
`;
export default Wrapper;
