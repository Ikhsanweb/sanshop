import { Link, redirect, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Landing';
import customFetch from '../utils/customFetch';
import { Logo, Spinner } from '../component';
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
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
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
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="bottom-container">
          <Link to="sign-up">
            <button className="sign-up-button btn">Sign Up</button>
          </Link>
          <Link to="sign-in">
            <button className="sign-in-button btn">Sign In</button>
          </Link>
        </div>
      )}
    </Wrapper>
  );
};
export default Landing;
