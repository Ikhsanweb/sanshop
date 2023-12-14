import { MdHelpCenter } from 'react-icons/md';
import Wrapper from '../assets/wrappers/ChatRooms';
import ChatRoomsItem from '../component/ChatRoomsItem';
import { Link } from 'react-router-dom';

export const chats = [
  {
    id: '126356',
    sender: 'John Cena',
    receiver: 'test 1',
    profilePicture: 'asdhgksdgfjhbchsadcn',
    messages: [
      {
        id: 'chat-wqiuy7y7w88',
        dateCreated: '16:40',
        message: 'ini adalah pesan trakhir kayaknya',
      },
      {
        id: 'chat-sjhksdhhw89',
        dateCreated: '16:35',
        message: 'ini adalah pesan keberikutny alagis',
      },
      {
        id: 'chat-d3482376734',
        dateCreated: '16:33',
        message: 'ini adalah pesan berikutnya lagi',
      },
      {
        id: 'chat-23746836836',
        dateCreated: '16:31',
        message: 'ini adalah pesan berikutnya',
      },
      {
        id: 'chat-92361928398',
        dateCreated: '16:30',
        message: 'ini adalah pesan terawal',
      },
    ],
    dateCreated: '16:30',
    dateUpdated: '16:40',
  },
  {
    id: '2342342345',
    sender: 'John Cena',
    receiver: 'test 3',
    profilePicture: 'sdfnsdbhbhdbhbjhb',
    messages: [
      {
        id: 'chat-dsfsdfcv',
        dateCreated: '13:40',
        message: 'ini adalah pesan kelima',
      },
      {
        id: 'chat-cvsdd',
        dateCreated: '12:55',
        message: 'ini adalah pesan keempat',
      },
      {
        id: 'chat-w4e2yuh',
        dateCreated: '12:33',
        message: 'ini adalah pesan ketiga',
      },
      {
        id: 'chat-3747',
        dateCreated: '12:21',
        message: 'ini adalah pesan kedua',
      },
      {
        id: 'chat-39847993889',
        dateCreated: '12:10',
        message: 'ini adalah pesan pertama',
      },
    ],
    dateCreated: '12:10',
    dateUpdated: '13:40',
  },
  {
    id: '234233342',
    sender: 'John Cena',
    receiver: 'test 2',
    profilePicture: '3234234342344',
    messages: [
      {
        id: 'chat-32497873',
        dateCreated: '19:10',
        message: 'ini adalah pesan kelima',
      },
      {
        id: 'chat-3257983',
        dateCreated: '11:55',
        message: 'ini adalah pesan keempat',
      },
      {
        id: 'chat-234988',
        dateCreated: '09:00',
        message: 'ini adalah pesan ketiga',
      },
      {
        id: 'chat-235870',
        dateCreated: '08:51',
        message: 'ini adalah pesan kedua',
      },
      {
        id: 'chat-237467',
        dateCreated: '08:50',
        message: 'ini adalah pesan pertama',
      },
    ],
    dateCreated: '08:50',
    dateUpdated: '19:10',
  },
];

const ChatRooms = () => {
  return (
    <Wrapper>
      <div className="top">
        <div className="help-center">
          <MdHelpCenter />
        </div>
      </div>
      <div className="body-chatrooms">
        {chats.map((chat) => {
          return (
            <Link to={`chat-room/${chat.id}`} key={chat.id}>
              <ChatRoomsItem chat={chat} />
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default ChatRooms;
