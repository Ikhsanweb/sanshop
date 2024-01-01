import { Link, redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Landing';
import customFetch from '../utils/customFetch';
import { Logo } from '../component';
import { toast } from 'sonner';

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/users/get-current-user');
    if (data) {
      return redirect('/dashboard');
    }
  } catch (error) {
    toast.warning('Please Sign In');
    return error;
  }
};

const Landing = () => {
  return (
    <Wrapper>
      <div className="top-container">
        <Logo />
        <h1 className="title">Discover products for a life well lived.</h1>
        <p className="second-title">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ipsa
          labore minima perferendis explicabo delectus illum blanditiis quod.
        </p>
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
