import Wrapper from '../assets/wrappers/SellerOrder';
import { useLoaderData } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import PageWrapper from '../component/PageWrapper';
import { BagDetail } from '../component';
import { toast } from 'sonner';

export const loader = async ({ params }) => {
  const { orderItemId } = params;
  try {
    const { data: sellerOrderItem } = await customFetch.get(
      `/orders/seller/get-single-order-item/${orderItemId}`
    );

    const response = sellerOrderItem.sellerOrderItem;
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const SellerOrder = () => {
  const sellerOrderItem = useLoaderData();
  return (
    <PageWrapper title="Order item detail" isNoHeader isColorWhite>
      <Wrapper>
        <BagDetail items={sellerOrderItem} isSeller />
      </Wrapper>
    </PageWrapper>
  );
};
export default SellerOrder;
