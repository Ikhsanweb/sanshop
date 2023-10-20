import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';

const action = async ({ params }) => {
  const { orderItemId } = params;
  const formData = { deliveryStatus: 'delivered' };
  try {
    await customFetch.patch(
      `/orders/seller/to-delivered/${orderItemId}`,
      formData
    );
  } catch (error) {
    console.log(error);
    return error;
  }
  return redirect(
    `/dashboard/store/seller-all-orders/seller-order/${orderItemId}`
  );
};

// const obstructingThelaw = '';
export default action;
