import { FaArrowLeft } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/BackNav';
import { useNavigate } from 'react-router-dom';

const BackNav = ({ title }) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(-1);
  return (
    <Wrapper>
      <div className="back-arrow" onClick={handleNavigate}>
        <FaArrowLeft />
      </div>
      <h1 className="title">{title}</h1>
    </Wrapper>
  );
};
export default BackNav;
