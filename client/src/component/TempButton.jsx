import Wrapper from '../assets/wrappers/TempButton';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const TempButton = ({ text, path }) => {
  return (
    <Wrapper>
      <Link to={path} className="temp-link">
        {text}
      </Link>
    </Wrapper>
  );
};
export default TempButton;
