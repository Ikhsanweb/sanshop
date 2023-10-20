import { Form, redirect, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/UpdateUser';
import BackNav from '../component/BackNav';
import customFetch from '../utils/customFetch';
import { FormRow, SubmitBtn } from '../component';

export const loader = async () => {
  const {
    data: { user: takedUser },
  } = await customFetch.get('/users/get-current-user');
  return takedUser;
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get('avatar');
  if (file && file.size > 500000) {
    console.log('image size is too large');
    return null;
  }

  try {
    await customFetch.patch('users/update-user', formData);
  } catch (error) {
    console.log(error);
  }
  const {
    data: { user: takedUser },
  } = await customFetch.get('/users/get-current-user');
  if (takedUser.role === 'user') return redirect('/dashboard');
  if (takedUser.role === 'seller') return redirect('/dashboard/store');
  // return null;
};

const UpdateUser = () => {
  const takeduser = useLoaderData();

  return (
    <Wrapper>
      <BackNav />
      <div className="container">
        <Form method="post" encType="multipart/form-data">
          <div className="form-row">
            <label htmlFor="avatar" className="form-label">
              Select an image file (max 0.5 MB)
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              className="form-input"
              accept="image/*"
            />
          </div>
          <FormRow
            type="text"
            name="fullName"
            labelText="full name"
            defaultValue={takeduser.fullName}
          />
          <FormRow type="email" name="email" defaultValue={takeduser.email} />
          <FormRow
            type="text"
            name="phoneNumber"
            labelText="phone number"
            defaultValue={takeduser.phoneNumber}
          />

          <FormRow
            type="text"
            name="country"
            labelText="country"
            defaultValue={takeduser.country}
          />
          <FormRow
            type="text"
            name="city"
            labelText="city"
            defaultValue={takeduser.city}
          />
          <FormRow
            type="text"
            name="address"
            labelText="address"
            defaultValue={takeduser.address}
          />
          <FormRow
            type="text"
            name="zipCode"
            labelText="zipCode"
            defaultValue={takeduser.zipCode}
          />
          <SubmitBtn />
        </Form>
      </div>
    </Wrapper>
  );
};
export default UpdateUser;
