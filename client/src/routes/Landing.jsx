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
    return null;
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
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>
          <Link to="sign-up">Sign Up</Link>
        </Button>
        <Button>
          <Link to="sign-in">Sign In</Link>
        </Button>
      </div>
    </Wrapper>
  );
};
export default Landing;
