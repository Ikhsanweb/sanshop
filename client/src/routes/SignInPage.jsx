/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Form, Link, redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SignPage';
import TempButton from '../component/TempButton';
import { FormRow, Logo, SubmitBtn } from '../component';
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

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = await Object.fromEntries(formData);

  try {
    const response = await customFetch.post('/authentications/login', data);
    // return redirect('/dashboard');
    const {
      data: { user: takedUser },
    } = await customFetch.get('/users/get-current-user');
    if (takedUser.role === 'user') return redirect('/dashboard');
    if (takedUser.role === 'seller') return redirect('/dashboard/store');
  } catch (error) {
    console.log(error);
    return error;
  }
};

const SignInPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <Form method="post">
          <div className="top-container">
            <Logo />
            <h2>Don{`'t`} have an account?</h2>
            <span>
              <Link to="/sign-up">Sign up</Link> with your email and password
            </span>
          </div>
          <FormRow type="email" name="email" defaultValue="" />
          <FormRow type="password" name="password" defaultValue="" />
          <SubmitBtn />
        </Form>
      </div>
    </Wrapper>
  );
};
export default SignInPage;
