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
        z-index: -10;
        width: 100%;
      }
    }
    .title {
      text-align: left;
      padding-top: 1rem;
      padding-left: 1rem;
      padding-bottom: 0.5rem;
      /* border-top-left-radius: var(-border-radius); */
      height: 100%;
      width: 100%;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      margin-top: -15px;
      z-index: 1000;
      background-color: var(--background-color);
      .name {
        font-size: var(--rf-mobile-large);
      }
      .brand {
        font-size: var(--rf-mobile-small);
        margin-top: 0.25rem;
        text-transform: capitalize;
        color: var(--text-grey);
      }
      .date {
        margin-top: 0.25rem;
        font-size: var(--rf-mobile-small);
        color: var(--text-color);
        text-transform: capitalize;
      }
    }
    .description {
      padding: 1rem;
      font-size: var(--rf-mobile-small);
      padding-top: 0.5rem;
      text-transform: none;
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
        /* background: var(--the-primary-color); */
        border-radius: var(--border-radius);
        border: 1px solid var(--the-primary-color);
        color: var(--text-color);
        /* padding: 0.1rem 0.25rem 0.1rem 0.5rem; */
        padding: 0.01rem 0.5rem;

        span {
          padding: 0;
          font-size: 2rem;
          margin-left: 0.75rem;
          color: var(--the-primary-color);
        }
      }
    }
  }
`;

export default Wrapper;
