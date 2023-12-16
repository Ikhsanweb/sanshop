import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'sonner';

const action = async ({ params }) => {
  const { orderItemId } = params;
  const formData = { orderStatus: 'notApproved' };
  try {
    await customFetch.patch(
      `/orders/user/to-not-approved/${orderItemId}`,
      formData
    );
    toast.success('Order is not approved');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
  return redirect(`/order/order-items`);
};

// const obstructingThelaw = '';
export default action;
