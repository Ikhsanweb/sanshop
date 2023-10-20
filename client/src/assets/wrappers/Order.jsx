import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 1.5rem;
  .order-container {
    padding: 20px;
    background-color: aqua;
    border-radius: 20px;
    margin: 30px 0;
  }
  .order-title {
    justify-items: center;
  }
  .order-item-container {
    border: 4px solid crimson;
    border-radius: 20px;
    padding: 1rem;
    margin: 20px 0;
  }
  .ordered-products-container {
    background-color: aliceblue;
    border-radius: 20px;
    margin: 10px 0;
  }
  .order-button-link {
    color: white;
    font-size: 20px;
  }
`;

export default Wrapper;
