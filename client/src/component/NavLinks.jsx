/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import { useDashboardContext } from '../contexts/dashboardContext/dashboardContext';
// import { useDashboardContext } from '../routes/DashboardLayout';

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        const { role } = user;
        if (path === '.' && role !== 'user') return;
        if (path === 'user-histories' && role !== 'user') return;
        if (path === 'seller-histories' && role !== 'seller') return;
        if (path === 'store' && role !== 'seller') return;
        if (path === 'store' && role !== 'seller') return;
        if (path === 'stats' && role !== 'admin') return;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className="icon">{icon}</span> {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
