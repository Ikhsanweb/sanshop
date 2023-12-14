import { Link, redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Landing';
import customFetch from '../utils/customFetch';
import Button, { BUTTON_TYPE_CLASSES } from '../component/Button';
import { Logo } from '../component';

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/users/get-current-user');
    if (data) {
      return redirect('/dashboard');
    }
  } catch (error) {
    return error;
  }
};

const Landing = () => {
  return (
    <Wrapper>
      <div className="top-container">
        <Logo />
        <h1 className="title">Explore your bags</h1>
      </div>
      <div className="bottom-container">
        <button className="sign-up-button btn">
          <Link to="sign-up">Sign Up</Link>
        </button>
        <button className="sign-in-button btn">
          <Link to="sign-in">Sign In</Link>
        </button>
      </div>
    </Wrapper>
  );
};
export default Landing;
