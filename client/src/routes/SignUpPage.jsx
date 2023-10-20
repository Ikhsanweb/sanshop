/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Form, Link, redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SignPage';
import TempButton from '../component/TempButton';
import { FormRow, FormRowSelect, Logo, SubmitBtn } from '../component';
import customFetch from '../utils/customFetch';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = await Object.fromEntries(formData);

  try {
    await customFetch.post('/authentications/register', data);
    return redirect('/sign-in');
  } catch (error) {
    console.log(error);
    return error;
  }
};

const SignUpPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <Form method="post">
          <div className="top-container">
            <Logo />
            <h2>Already have an account?</h2>
            <span>
              <Link to="/sign-in">Sign in</Link> with your email and password
            </span>
          </div>
          <FormRow type="text" name="fullName" labelText="full name" />
          <FormRow type="email" name="email" />
          <FormRow type="password" name="password" defaultValue="secret123" />
          <FormRow type="text" name="phoneNumber" labelText="phone number" />
          <FormRowSelect
            name="role"
            labelText="role"
            list={['user', 'seller']}
          />
          <SubmitBtn />
        </Form>
      </div>
      {/* <div className="bottom-container">
      </div> */}
    </Wrapper>
  );
};
export default SignUpPage;
