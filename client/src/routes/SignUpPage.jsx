/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Form, Link, redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SignPage';
import TempButton from '../component/TempButton';
import { FormRow, FormRowSelect, Logo, SubmitBtn } from '../component';
import customFetch from '../utils/customFetch';
import { toast } from 'sonner';

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
    await customFetch.post('/authentications/register', data);
    toast.success('Account created successfully');
    return redirect('/sign-in');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const SignUpPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <Form method="post">
          <div className="top-container">
            {/* <Logo /> */}
            <h1 className="title">Create Account</h1>
            <h4 className="second-title">Fill your information below</h4>
          </div>
          <FormRow type="text" name="fullName" labelText="full name" />
          <FormRow type="email" name="email" />
          <FormRow type="password" name="password" defaultValue="" />
          <FormRow type="text" name="phoneNumber" labelText="phone number" />
          <FormRowSelect
            name="role"
            labelText="role"
            list={['user', 'seller']}
          />
          <SubmitBtn />
        </Form>
        <div className="additional-info">
          <h4 className="additional-info-h4">
            Already have an account?{' '}
            <Link className="sign" to="/sign-in">
              Sign in
            </Link>
          </h4>
        </div>
      </div>
    </Wrapper>
  );
};
export default SignUpPage;
