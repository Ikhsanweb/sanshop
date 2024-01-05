import Wrapper from '../assets/wrappers/BackNav';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

const BackNav = ({ title }) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(-1);
  return (
    <Wrapper>
      <div className="back-arrow" onClick={handleNavigate}>
        <IoArrowBack />
      </div>
      <h1 className="title">{title}</h1>
    </Wrapper>
  );
};
export default BackNav;
