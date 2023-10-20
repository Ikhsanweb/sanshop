import { useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/UserHistory';
import customFetch from '../utils/customFetch';
import {
  CustomerOrderInfo,
  OrderDetailStatusInfo,
  OrderDetailTotalPrice,
  OrderItemSecondaryTitle,
  OrderItemTitle,
  OrderStatusInfo,
  OrderedProduct,
} from '../component';
import PageWrapper from '../component/PageWrapper';

export const loader = async ({ params }) => {
  const { userHistoryId } = params;
  try {
    const { data: userHistory } = await customFetch.get(
      `/orders/user/get-history/${userHistoryId}`
    );
    // console.log(data);
    const response = userHistory.userHistory;
    return response;
    // return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const UserHistory = () => {
  const userHistory = useLoaderData();

  const { deliveryStatus, orderStatus, orderedProducts, totalPrice } =
    userHistory;

  return (
    <PageWrapper title="Transaction Detail">
      <Wrapper>
        <div className="order-ordered-products">
          <div className="order-item">
            <OrderStatusInfo deliveryStatus={deliveryStatus} />
          </div>
          <div className="order-bottom">
            <OrderDetailStatusInfo
              deliveryStatus={deliveryStatus}
              orderStatus={orderStatus}
            />
            <OrderItemTitle orderItem={userHistory} />
            <OrderItemSecondaryTitle />
            <div className="order-item-body">
              {orderedProducts.map((orderedProduct) => {
                return (
                  <OrderedProduct
                    key={orderedProduct._id}
                    orderedProduct={orderedProduct}
                  />
                );
              })}
              <CustomerOrderInfo sellerOrderItem={userHistory} />
              <div className="order-bottom">
                <OrderDetailTotalPrice totalPrice={totalPrice} />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </PageWrapper>
  );
};
export default UserHistory;
