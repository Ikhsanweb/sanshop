import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'sonner';

const action = async ({ params }) => {
  const { orderItemId } = params;
  const formData = { deliveryStatus: 'shipping' };
  try {
    await customFetch.patch(
      `/orders/seller/to-shipping/${orderItemId}`,
      formData
    );
    toast.success('Product is shipped successfully');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
  return redirect(`/seller-all-orders/seller-order/${orderItemId}`);
};

// const obstructingThelaw = '';
export default action;
