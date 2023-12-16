import { useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ChatRoom';
import { chats } from './ChatRooms';
import PageWrapper from '../component/PageWrapper';
import ChatRoomItem from '../component/ChatRoomItem';

export const loader = async ({ params }) => {
  return params;
};

const ChatRoom = () => {
  const { chatRoomId } = useLoaderData();
  // const aquiredChat = chats.filter((chat) => chat.id === chatRoomId);
  return (
    <PageWrapper>
      <Wrapper>
        <div className="top"></div>
        <div className="body">
          <ChatRoomItem />
          <ChatRoomItem />
          <ChatRoomItem />
          <ChatRoomItem />
          <ChatRoomItem />
        </div>
      </Wrapper>
    </PageWrapper>
  );
};
export default ChatRoom;
