import { Link, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SellerHistories';
import customFetch from '../utils/customFetch';
import PageWrapper from '../component/PageWrapper';
import { HistoriesItem, OrderBag, Spinner } from '../component';
import { toast } from 'sonner';
import { Suspense } from 'react';

export const loader = async () => {
  try {
    const { data: sellerHistories } = await customFetch.get(
      `/orders/seller/get-history`
    );
    const response = sellerHistories.sellerHistories;
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const SellerHistories = () => {
  const sellerHistories = useLoaderData();
  return (
    <Suspense fallback={<Spinner />}>
      <PageWrapper title="Transaction Histories">
        <Wrapper>
          <div className="body">
            {sellerHistories.map((sellerOrderItem) => {
              return (
                <Link
                  to={`history-detail/${sellerOrderItem._id}`}
                  key={sellerOrderItem._id}
                >
                  <OrderBag orderItems={sellerOrderItem} isSeller />
                </Link>
              );
            })}
          </div>
        </Wrapper>
      </PageWrapper>
    </Suspense>
  );
};
export default SellerHistories;
