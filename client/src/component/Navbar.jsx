/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft, FaArrowRight } from 'react-icons/fa';
import Logo from './Logo';
import LogoutContainer from './LogoutContainer';
import ThemeToggle from './ThemeToggle';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';
import { useDashboardContext } from '../contexts/dashboardContext/dashboardContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { toggleSidebar, showCartDropdown, user, setSearchKeyword } =
    useDashboardContext();
  const navigate = useNavigate();
  const [toSearch, setToSearch] = useState();

  const handleToSearch = (event) => {
    setToSearch(event.target.value);
  };

  const handleToSearchPage = async (e) => {
    e.preventDefault();
    if (toSearch) {
      setSearchKeyword(toSearch);
      // let url = new ()
      let params = new URLSearchParams();
      params.append('search', toSearch);
      return navigate(`/search?${params}`);
    }
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div className="nav-centerr">
          {user.role === 'user' && (
            <form onSubmit={handleToSearchPage}>
              <div className="nav-form-row">
                <input
                  type="text"
                  name="toSearch"
                  className="search-bar"
                  placeholder="search"
                  onChange={handleToSearch}
                />
                <button type="submit">
                  <FaArrowRight className="submit-icon" />
                </button>
              </div>
            </form>
          )}
        </div>
        <h4 className="logo-text"> Dashboard</h4>
        <div className="btn-container">
          <ThemeToggle />
          {user.role === 'user' && <CartIcon />}
        </div>
        {showCartDropdown && <CartDropdown />}
      </div>
    </Wrapper>
  );
};
export default Navbar;
