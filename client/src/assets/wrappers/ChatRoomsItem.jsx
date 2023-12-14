import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 80px;
  display: 100%;
  background-color: var(--background-secondary-color);
  margin: 0.5rem 0;
  border-bottom: 0.5px solid var(--the-primary-color);
  .profile {
    width: 20%;
    height: 100%;
    padding: 0.5rem;
    .profile-img {
      width: 100%;
      height: 100%;
      border-radius: 90%;
      background-color: white;
    }
  }
  .body {
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 0.5rem;
    .name {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }
    .last-message {
      color: darkgray;
    }
  }
  .chat-info {
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 0.75rem;
    align-items: center;
    .time {
      margin-bottom: 0.5rem;
    }
    .unread-count {
      background-color: red;
      padding: 0.25rem;
      border-radius: 90%;
      color: black;
    }
  }
`;
export default Wrapper;
