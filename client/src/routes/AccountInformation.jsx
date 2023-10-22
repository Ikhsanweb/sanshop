import { Link, useNavigate } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { useDashboardContext } from '../contexts/dashboardContext/dashboardContext';
import Button from '../component/Button';

const AccountInformation = () => {
  const { user, setUser } = useDashboardContext();
  const navigate = useNavigate();
  const logoutUser = async () => {
    await customFetch.get('/authentications/logout');
    setUser(null);
    navigate('/');
  };

  return (
    <div>
      {user.role === 'user' && (
        <div>
          {/* <div>
            <Button type="button" className="btn btn-block">
              <Link to="/order" style={{ color: 'white' }}>
                Order List
              </Link>
            </Button>
          </div> */}
          <div>
            <Button type="button" className="btn btn-block">
              <Link to="/order/order-items" style={{ color: 'white' }}>
                Order Item List
              </Link>
            </Button>
          </div>
        </div>
      )}

      {/* <div className="user-info"></div> */}
      <div>
        <Button type="button" className="btn btn-block">
          <Link to="update-user" style={{ color: 'white' }}>
            Edit User Info
          </Link>
        </Button>
      </div>

      <div>
        <Button type="button" className="btn btn-block" onClick={logoutUser}>
          Logout
        </Button>
      </div>
    </div>
  );
};
export default AccountInformation;
