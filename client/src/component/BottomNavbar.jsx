import { ImFeed, ImHome3 } from 'react-icons/im';
import Wrapper from '../assets/wrappers/BottomNavbar';
import { MdAccountCircle } from 'react-icons/md';
import { FaList } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

const bottomLinks = [
  {
    icon: <ImHome3 />,
    text: 'Home',
    path: '.',
  },
  {
    icon: <ImFeed />,
    text: 'Feed',
    path: 'feed',
  },
  {
    icon: <FaList />,
    text: 'History',
    path: 'history',
  },
  {
    icon: <MdAccountCircle />,
    text: 'Account',
    path: 'account',
  },
];

const BottomNavbar = () => {
  return (
    <Wrapper>
      <div className="nav-links">
        {/* {bottomLinks.map((link) => {
          const { text, path, icon } = link;
          return (
            <NavLink to={path} key={text} className="nav-link">
              <span className="icon">{icon}</span>
              <p className="text-icon">{text}</p>
            </NavLink>
          );
        })} */}
        <NavLinks />
      </div>
    </Wrapper>
  );
};
export default BottomNavbar;
