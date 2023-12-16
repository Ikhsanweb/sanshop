import { Link, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/OrderItems';
import customFetch from '../utils/customFetch';
import PageWrapper from '../component/PageWrapper';
import {
  CustomerOrderInfo,
  OrderDetailStatusInfo,
  OrderDetailTotalPrice,
  OrderItemSecondaryTitle,
  OrderItemTitle,
  OrderedProduct,
} from '../component';
import { toast } from 'sonner';

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
    <PageWrapper title="Order Items">
      <Wrapper>
        <div className="body">
          {userOrderItems.map((userOrderItem) => {
            return (
              <Link
                to={`/dashboard/order/order-item/${userOrderItem._id}`}
                key={userOrderItem._id}
              >
                <div className="order-item">
                  <OrderItemTitle orderItem={userOrderItem} />
                  <OrderItemSecondaryTitle />
                  <div className="order-item-body">
                    {userOrderItem.orderedProducts.map((orderedProduct) => {
                      return (
                        <OrderedProduct
                          key={orderedProduct._id}
                          orderedProduct={orderedProduct}
                        />
                      );
                    })}
                    <CustomerOrderInfo sellerOrderItem={userOrderItem} />
                  </div>
                  <div className="order-bottom">
                    <OrderDetailTotalPrice
                      totalPrice={userOrderItem.totalPrice}
                    />
                    <OrderDetailStatusInfo
                      deliveryStatus={userOrderItem.deliveryStatus}
                      orderStatus={userOrderItem.orderStatus}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Wrapper>
    </PageWrapper>
  );
};
export default OrderItems;
