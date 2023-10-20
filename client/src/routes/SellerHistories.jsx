import { Link, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SellerHistories';
import customFetch from '../utils/customFetch';
import PageWrapper from '../component/PageWrapper';
import { HistoriesItem } from '../component';

export const loader = async () => {
  try {
    const { data: sellerHistories } = await customFetch.get(
      `/orders/seller/get-history`
    );
    console.log(sellerHistories);
    const response = sellerHistories.sellerHistories;
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const SellerHistories = () => {
  const sellerHistories = useLoaderData();
  return (
    <PageWrapper title="Transaction Histories">
      <Wrapper>
        <div className="body">
          {sellerHistories.map((sellerOrderItem) => {
            return (
              <Link
                to={`history-detail/${sellerOrderItem._id}`}
                key={sellerOrderItem._id}
              >
                <HistoriesItem orderItem={sellerOrderItem} isSeller />
              </Link>
            );
          })}
        </div>
      </Wrapper>
    </PageWrapper>
  );
};
export default SellerHistories;
