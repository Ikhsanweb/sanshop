import Wrapper from '../assets/wrappers/BackNav';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

const BackNav = ({ title, isColorWhite, isColorBlack }) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(-1);
  return (
    <Wrapper
      style={{
        color: `${isColorWhite ? 'white' : isColorBlack ? 'black' : ''}`,
      }}
    >
      <div
        className={`back-arrow ${
          isColorWhite ? 'color-white' : isColorBlack ? 'color-black' : ''
        }`}
        onClick={handleNavigate}
      >
        <IoArrowBack />
      </div>
      <h1 className="title">{title}</h1>
    </Wrapper>
  );
};
export default BackNav;
