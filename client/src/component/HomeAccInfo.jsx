import { FaFirstOrder, FaHistory } from 'react-icons/fa';
import { IoLogOut, IoPerson } from 'react-icons/io5';
import Wrapper from '../assets/wrappers/HomeAccInfo';
import { Link, useNavigate } from 'react-router-dom';
import { useDashboardContext } from '../contexts/dashboardContext/dashboardContext';
import customFetch from '../utils/customFetch';

const HomeAccInfo = () => {
  const { user, setUser } = useDashboardContext();
  const navigate = useNavigate();
  const logoutUser = async () => {
    await customFetch.get('/authentications/logout');
    setUser(null);
    navigate('/');
  };
  return (
    <Wrapper>
      <div className="acc-info-item">
        <Link to={`/dashboard/account-information`}>
          {user.avatar ? (
            <div className="avatar">
              <img src={user.avatar} alt="avatar" className="img" />
            </div>
          ) : (
            <IoPerson className="icon" />
          )}
          <span className="text-icon">Info</span>
        </Link>
      </div>
      <div className="acc-info-item">
        <Link to={`/order/order-items`}>
          <FaFirstOrder className="icon" />
          <span className="text-icon">Order</span>
        </Link>
      </div>
      <div className="acc-info-item">
        <Link to={`/dashboard/user-histories`}>
          <FaHistory className="icon" />
          <span className="text-icon">History</span>
        </Link>
      </div>
      <div className="acc-info-logout" onClick={logoutUser}>
        <IoLogOut className="icon" />
        <span className="text-icon">Logout</span>
      </div>
    </Wrapper>
  );
};
export default HomeAccInfo;
