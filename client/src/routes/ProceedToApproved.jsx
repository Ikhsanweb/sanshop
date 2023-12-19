import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'sonner';

const action = async ({ params }) => {
  const { orderItemId } = params;
  const formData = { orderStatus: 'approved' };
  try {
    await customFetch.patch(
      `/orders/user/to-approved/${orderItemId}`,
      formData
    );
    toast.success('Order is Approved');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
  return redirect(`/dashboard/user-histories`);
};

// const obstructingThelaw = '';
export default action;
