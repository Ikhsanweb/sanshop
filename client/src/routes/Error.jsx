import { FaHome } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/Temp';
import { Link, redirect } from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper>
      <h1>404 Not Found</h1>
      <Link to="/" replace>
        <button className="home-btn">
          <FaHome />
        </button>
      </Link>
    </Wrapper>
  );
};
export default Error;
