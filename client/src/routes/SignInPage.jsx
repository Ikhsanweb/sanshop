/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SignPage';
import { FormRow, Logo, Spinner, SubmitBtn } from '../component';
import customFetch from '../utils/customFetch';
import { toast } from 'sonner';
import Button from '../component/Button';
import { useState } from 'react';

// export const loader = async () => {
//   try {
//     const { data } = await customFetch.get('/users/get-current-user');
//     if (data) {
//       return redirect('/dashboard');
//     }
//     return null;
//   } catch (error) {
//     return error;
//   }
// };

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = await Object.fromEntries(formData);

  try {
    const response = await customFetch.post('/authentications/login', data);
    const {
      data: { user: takedUser },
    } = await customFetch.get('/users/get-current-user');
    toast.success('Login successful');
    if (takedUser.role === 'user') return redirect('/dashboard');
    if (takedUser.role === 'seller') return redirect('/dashboard/store');
  } catch (error) {
    toast.error(
      'Email or Password is incorrect. Please provide correct email and password'
    );
    return error;
  }
};

const SignInPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const loginWithTestUserOne = async () => {
    setIsLoading(true);
    const data = {
      email: 'testuser1@testmail.com',
      password: 'secret123',
    };
    try {
      const response = await customFetch.post('/authentications/login', data);
      toast.success('Take a test drive');
      setIsLoading(false);
      navigate('/dashboard');
    } catch (error) {
      setIsLoading(false);
      toast.error(error?.response?.data?.message);
    }
  };
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
          <Button
            type="button"
            className="btn btn-block"
            onClick={loginWithTestUserOne}
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : 'Login with Test User'}
          </Button>
        </Form>
      </div>
    </Wrapper>
  );
};
export default SignInPage;
