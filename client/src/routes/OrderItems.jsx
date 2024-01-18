import { Link, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/OrderItems';
import customFetch from '../utils/customFetch';
import PageWrapper from '../component/PageWrapper';
import {
  CustomerOrderInfo,
  OrderBag,
  OrderDetailStatusInfo,
  OrderDetailTotalPrice,
  OrderItemSecondaryTitle,
  OrderItemTitle,
  OrderedProduct,
  Spinner,
} from '../component';
import { toast } from 'sonner';
import { Suspense } from 'react';

export const loader = async () => {
  try {
    const { data: userOrderItems } = await customFetch.get(
      `/orders/user/get-all-order-item`
    );

    const response = userOrderItems.userOrderItems;
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const OrderItems = () => {
  const userOrderItems = useLoaderData();

  return (
    <Suspense fallback={<Spinner />}>
      <PageWrapper title="Order List" isInsideNoTop>
        <Wrapper>
          <div className="body">
            {userOrderItems.map((userOrderItem) => {
              return (
                <Link
                  to={`/order/order-item/${userOrderItem._id}`}
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
export default OrderItems;
