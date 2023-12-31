import styled from 'styled-components';

const Wrapper = styled.div`
  /* border-bottom: 15px solid var(--the-primary-color);
  border-left: 15px solid var(--the-primary-color);
  border-right: 15px solid var(--the-primary-color); */
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  color: var(--text-color);
  .order-detail-status-status {
    .order-detail-status-text {
      margin-bottom: 1rem;
      font-size: 0.75rem;
      text-align: center;
    }
    .order-detail-status-orderstatus {
      color: white;
      font-weight: 700;
      font-size: 1rem;
      text-transform: uppercase;
      padding: 1rem;
    }
    .order-detail-status-deliverystatus {
      color: white;
      font-weight: 700;
      font-size: 1rem;
      text-transform: uppercase;
      padding: 1rem;
    }
  }
`;

export default Wrapper;
