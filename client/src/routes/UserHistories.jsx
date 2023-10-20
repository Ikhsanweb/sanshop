import { Link, useLoaderData } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/UserHistories';
import PageWrapper from '../component/PageWrapper';
import { HistoriesItem } from '../component';

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
  return (
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
  );
};
export default UserHistory;
