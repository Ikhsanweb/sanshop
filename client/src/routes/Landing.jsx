import { redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Temp';
import TempButton from '../component/TempButton';
import customFetch from '../utils/customFetch';

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
      <h1 className="temp-text">Landing Page</h1>
      <div>
        <TempButton text="Sign Up" path="sign-up" />
        <TempButton text="Sign In" path="sign-in" />
      </div>
    </Wrapper>
  );
};
export default Landing;
