import { Link, useLoaderData } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/UserHistories';
import PageWrapper from '../component/PageWrapper';
import { HistoriesItem, OrderBag, Spinner } from '../component';
import { Suspense } from 'react';
import { toast } from 'sonner';

export const loader = async () => {
  // const { orderItemId } = params;
  try {
    const { data: userHistories } = await customFetch.get(
      `/orders/user/get-history`
    );

    const response = userHistories.userHistories;
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const UserHistory = () => {
  const userHistories = useLoaderData();
  return (
    <Suspense fallback={<Spinner />}>
      <PageWrapper title="Transaction Histories" >
        <Wrapper>
          <div className="body">
            {userHistories.map((userOrderItem) => {
              return (
                <Link
                  to={`history-detail/${userOrderItem._id}`}
                  key={userOrderItem._id}
                >
                  <OrderBag orderItems={userOrderItem} />
                </Link>
              );
            })}
          </div>
        </Wrapper>
      </PageWrapper>
    </Suspense>
  );
};
export default UserHistory;
