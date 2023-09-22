/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Form, redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SignPage';
import TempButton from '../component/TempButton';
import { FormRow, Logo, SubmitBtn } from '../component';
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
      <Form method="post">
        <Logo />
        <h3
          style={{
            margin: '20px 0',
            textAlign: 'center',
            color: 'var(--primary-500)',
          }}
        >
          Sign Up Page
        </h3>
        <FormRow type="text" name="fullName" labelText="full name" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <FormRow type="text" name="phoneNumber" labelText="phone number" />
        <SubmitBtn />
      </Form>
      <div>
        <TempButton text="Back to Landing" path="/" />
      </div>
    </Wrapper>
  );
};
export default SignUpPage;
