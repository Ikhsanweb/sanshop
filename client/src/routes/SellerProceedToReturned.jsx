import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'sonner';

const action = async ({ params }) => {
  const { orderItemId } = params;
  const formData = { deliveryStatus: 'returned' };
  try {
    await customFetch.patch(
      `/orders/seller/to-returned/${orderItemId}`,
      formData
    );
    toast.success('Product is returned successfully');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
  return redirect(`/dashboard/store`);
};

// const obstructingThelaw = '';
export default action;
