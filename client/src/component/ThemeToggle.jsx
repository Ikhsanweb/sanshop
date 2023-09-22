import { IoMoon, IoSunny } from 'react-icons/io5';
import Wrapper from '../assets/wrappers/ThemeToggle';
import { useDashboardContext } from '../routes/DashboardLayout';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();
  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <IoSunny className="toggle-icon" />
      ) : (
        <IoMoon className="toggle-icon" />
      )}
    </Wrapper>
  );
};
export default ThemeToggle;
