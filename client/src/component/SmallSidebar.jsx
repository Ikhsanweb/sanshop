import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/SmallSidebar';
import Logo from './Logo';

const SmallSidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container">
        <div className="content">
          <button type="button" className="close-btn">
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
