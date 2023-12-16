import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'sonner';

const action = async ({ params }) => {
  const { orderItemId } = params;
  const formData = { deliveryStatus: 'delivered' };
  try {
    await customFetch.patch(
      `/orders/seller/to-delivered/${orderItemId}`,
      formData
    );
    toast.success('Product is delivered successfully');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
  return redirect(
    `/dashboard/store/seller-all-orders/seller-order/${orderItemId}`
  );
};

// const obstructingThelaw = '';
export default action;
