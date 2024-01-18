import { useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SellerHistory';
import customFetch from '../utils/customFetch';
import PageWrapper from '../component/PageWrapper';
import { BagDetail } from '../component';
import { toast } from 'sonner';

export const loader = async ({ params }) => {
  const { sellerHistoryId } = params;
  try {
    const { data: sellerHistory } = await customFetch.get(
      `/orders/seller/get-history/${sellerHistoryId}`
    );
    const response = sellerHistory.sellerHistory;
    return response;
    // return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const SellerHistory = () => {
  const sellerHistory = useLoaderData();

  return (
    <PageWrapper title="Transaction Detail" isColorWhiteStatic>
      <Wrapper>
        <BagDetail items={sellerHistory} isSeller />
      </Wrapper>
    </PageWrapper>
  );
};
export default SellerHistory;
