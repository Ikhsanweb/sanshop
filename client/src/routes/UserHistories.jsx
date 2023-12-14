import { Link, useLoaderData } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/UserHistories';
import PageWrapper from '../component/PageWrapper';
import { HistoriesItem, Spinner } from '../component';
import { Suspense } from 'react';

export const loader = async () => {
  // const { orderItemId } = params;
  try {
    const { data: userHistories } = await customFetch.get(
      `/orders/user/get-history`
    );

    const response = userHistories.userHistories;
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const UserHistory = () => {
  const userHistories = useLoaderData();
  console.log(userHistories);
  return (
    <Suspense fallback={<Spinner />}>
      <PageWrapper title="Transaction Histories">
        <Wrapper>
          <div className="body">
            {userHistories.map((userOrderItem) => {
              return (
                <Link
                  to={`history-detail/${userOrderItem._id}`}
                  key={userOrderItem._id}
                >
                  <HistoriesItem orderItem={userOrderItem} />
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
