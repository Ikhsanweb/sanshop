import { useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/OrderItem';
import customFetch from '../utils/customFetch';
import PageWrapper from '../component/PageWrapper';
import { BagDetail } from '../component';
import { toast } from 'sonner';

export const loader = async ({ params }) => {
  const { orderItemId } = params;
  try {
    const { data: userOrderItem } = await customFetch.get(
      `/orders/user/get-single-order-item/${orderItemId}`
    );

    const response = userOrderItem.userOrderItem;
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const OrderItem = () => {
  const userOrderItem = useLoaderData();
  return (
    <PageWrapper title="Your Order Detail" isNoHeader isColorWhite>
      <Wrapper>
        <BagDetail items={userOrderItem} />
      </Wrapper>
    </PageWrapper>
  );
};
export default OrderItem;
