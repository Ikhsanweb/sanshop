import { Link, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Store';
import { useDashboardContext } from '../contexts/dashboardContext/dashboardContext';
import { IoAddCircle, IoLogOut, IoPerson } from 'react-icons/io5';
import { FaBox, FaBoxes } from 'react-icons/fa';
import customFetch from '../utils/customFetch';

const Store = () => {
  const { user, setUser } = useDashboardContext();
  const navigate = useNavigate();
  const logoutUser = async () => {
    await customFetch.get('/authentications/logout');
    setUser(null);
    navigate('/');
  };
  console.log(user);
  return (
    <Wrapper>
      <div className="header">
        <div className="header-left">
          <h4>Welcome Back !!!</h4>
          <h1>{user.fullName}</h1>
        </div>
        <div className="header-right">
          {user.avatar ? (
            <div className="avatar">
              <img src={user.avatar} alt="avatar" className="img" />
            </div>
          ) : (
            <IoPerson className="avatar-icon" />
          )}
        </div>
      </div>
      <div className="body">
        <Link to="seller-all-products" className="body-item">
          <div className="body-item-left">
            <span>See all products</span>
          </div>
          <div className="body-item-right">
            <FaBoxes />
          </div>
        </Link>
        <Link to="seller-add-product" className="body-item">
          <div className="body-item-left">
            <span>Add new product</span>
          </div>
          <div className="body-item-right">
            <IoAddCircle />
          </div>
        </Link>
        <Link to="seller-all-orders" className="body-item">
          <div className="body-item-left">
            <span>See all orders</span>
          </div>
          <div className="body-item-right">
            <FaBox />
          </div>
        </Link>
        <div className="body-item" onClick={logoutUser}>
          <div className="body-item-left">
            <span>Log Out</span>
          </div>
          <div className="body-item-right">
            <IoLogOut />
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </Wrapper>
  );
};
export default Store;
