import styled from 'styled-components';

// import Button from './Button';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 800px) {
    min-width: 200px;
    height: 200px;
    margin: 0 auto;
    margin-bottom: 50px;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
  @media screen and (max-width: 800px) {
    min-width: 200px;
  }
`;

export const PaymentButton = styled.button`
  margin-left: auto;
  margin-top: 30px;
  @media screen and (max-width: 800px) {
    margin-top: 20px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  padding-bottom: 1rem;
  .body {
    padding: 0 2rem 2rem 2rem;
    .card-container {
      margin-top: 2rem;
      border: 4px solid var(--the-primary-color);
      padding: 1rem;
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
    }
    .card-title {
    }
    .card {
      margin-top: 1rem;
      border: 1px solid var(--the-primary-color);
      padding: 0.5rem;
    }
  }
`;

export default Wrapper;
