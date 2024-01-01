import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  /* height: 90vh; */
  overflow-y: scroll;
  scroll-behavior: smooth;
  .body {
    height: fit-content;
    width: 100%;
    margin-bottom: 8rem;
    .top {
      width: 100%;
      height: fit-content;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      .product-img {
        width: 100%;
      }
    }
    .title {
      text-align: left;
      padding: 1rem;
      padding-bottom: 0.5rem;
      .name {
        font-size: 2rem;
      }
      .brand {
        font-size: 1rem;
        margin-top: 0.25rem;
        /* color: darkgray; */
      }
      .date {
        margin-top: 0.25rem;
        font-size: 0.75rem;
        color: var(--text-color);
      }
    }
    .description {
      padding: 1rem;
      padding-top: 0.5rem;
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
    background-color: var(--background-color);
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
