import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  margin-bottom: 6rem;
  .body {
    height: 100%;
    width: 100%;
    .top {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: crimson;
      overflow: hidden;
      .product-image {
        width: 100%;
      }
    }
    .title {
      text-align: left;
      padding: 1rem;
      .name {
        font-size: 2rem;
      }
      .brand {
        font-size: 1rem;
        margin-top: 0.5rem;
      }
      .date {
        margin-top: 1rem;
        font-size: 1rem;
      }
    }
    .description {
      padding: 1rem;
    }
  }
  .footer {
    position: fixed;
    bottom: 4rem;
    width: 100%;
    height: 5em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    .button-container {
      display: flex;
      align-items: end;
      .btn-add {
        display: flex;
        align-items: center;
        background: crimson;
        border-radius: 0;
        border: none;
        color: white;
        padding: 0.1rem 0.25rem 0.1rem 0.5rem;
        span {
          padding: 0;
          font-size: 2rem;
          margin-left: 0.75rem;
        }
      }
    }
  }
`;
export default Wrapper;
