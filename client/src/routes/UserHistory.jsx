import { useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/UserHistory';
import customFetch from '../utils/customFetch';
import { BagDetail } from '../component';
import PageWrapper from '../component/PageWrapper';
import { toast } from 'sonner';

export const loader = async ({ params }) => {
  const { userHistoryId } = params;
  try {
    const { data: userHistory } = await customFetch.get(
      `/orders/user/get-history/${userHistoryId}`
    );
    const response = userHistory.userHistory;
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const UserHistory = () => {
  const userHistory = useLoaderData();
  return (
    <PageWrapper title="Transaction Detail" isNoHeader isColorWhite>
      <Wrapper>
        <BagDetail items={userHistory} />
      </Wrapper>
    </PageWrapper>
  );
};
export default UserHistory;
