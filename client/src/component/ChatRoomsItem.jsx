import Wrapper from '../assets/wrappers/ChatRoomsItem';

const ChatRoomsItem = ({ chat }) => {
  const { receiver, messages } = chat;
  const lastMessageTaker = messages[0];
  const { dateCreated, message } = lastMessageTaker;
  return (
    <Wrapper>
      <div className="profile">
        <div className="profile-img"></div>
      </div>
      <div className="body">
        <div className="name">{receiver}</div>
        <div className="last-message">
          {message.length >= 20 ? message.substring(0, 18) + '...' : message}
        </div>
      </div>
      <div className="chat-info">
        <div className="time">{dateCreated}</div>
        <div className="unread-count">23</div>
      </div>
    </Wrapper>
  );
};
export default ChatRoomsItem;
