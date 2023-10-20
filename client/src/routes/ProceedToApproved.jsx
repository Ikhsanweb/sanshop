import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';

const action = async ({ params }) => {
  const { orderItemId } = params;
  const formData = { orderStatus: 'approved' };
  try {
    await customFetch.patch(
      `/orders/user/to-approved/${orderItemId}`,
      formData
    );
  } catch (error) {
    console.log(error);
    return error;
  }
  return redirect(`/order/order-items`);
};

// const obstructingThelaw = '';
export default action;
