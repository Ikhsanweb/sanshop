import { Form, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/OrderItem';
import customFetch from '../utils/customFetch';
import { FaBox, FaHourglass, FaShippingFast } from 'react-icons/fa';
import { IoReturnDownBack, IoReturnUpBack } from 'react-icons/io5';
import Button from '../component/Button';
import PageWrapper from '../component/PageWrapper';
import {
  CustomerOrderInfo,
  OrderDetailStatusInfo,
  OrderDetailTotalPrice,
  OrderItemSecondaryTitle,
  OrderItemTitle,
  OrderStatusInfo,
  OrderedProduct,
} from '../component';

export const loader = async ({ params }) => {
  const { orderItemId } = params;
  try {
    const { data: userOrderItem } = await customFetch.get(
      `/orders/user/get-single-order-item/${orderItemId}`
    );

    const response = userOrderItem.userOrderItem;
    return response;
    // console.log(data);
    // return null;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const OrderItem = () => {
  const userOrderItem = useLoaderData();
  const { deliveryStatus, orderStatus, orderedProducts, totalPrice } =
    userOrderItem;
  const deliveryBg = (status) => {
    const deliveryState = { color: null, icon: null };
    if (status === 'pending') {
      deliveryState.color = 'gray';
      deliveryState.icon = <FaHourglass />;
      return deliveryState;
    }
    if (status === 'shipping') {
      deliveryState.color = 'teal';
      deliveryState.icon = <FaShippingFast />;
      return deliveryState;
    }
    if (status === 'delivered') {
      deliveryState.color = 'yellowgreen';
      deliveryState.icon = <FaBox />;
      return deliveryState;
    }
    if (status === 'returning') {
      deliveryState.color = 'black';
      deliveryState.icon = <IoReturnDownBack />;
      return deliveryState;
    }
    if (status === 'canceled') {
      deliveryState.color = 'red';
      deliveryState.icon = <IoReturnUpBack />;
      return deliveryState;
    }
  };
  return (
    <PageWrapper title="Your Order Detail">
      <Wrapper>
        <div className="order-ordered-products">
          <div className="order-item">
            <OrderStatusInfo deliveryStatus={deliveryStatus} />
            <OrderDetailStatusInfo
              deliveryStatus={deliveryStatus}
              orderStatus={orderStatus}
            />
            <OrderItemTitle orderItem={userOrderItem} />
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
              <CustomerOrderInfo sellerOrderItem={userOrderItem} />
              <div className="order-bottom">
                <OrderDetailTotalPrice totalPrice={totalPrice} />
                <div className="order-bottom-function-title">
                  <h3 className="order-bottom-function-title-h3">
                    Order Items Info
                  </h3>
                </div>
                <div className="order-bottom-function">
                  {userOrderItem.orderStatus === 'processing' && (
                    <h2 className="seller-feedback-status">
                      Waiting for Seller Feedback
                    </h2>
                  )}
                  {userOrderItem.orderStatus === 'readyToApprove' && (
                    <Form
                      method="post"
                      action={`/order/order-item/proceed-to-approved/${userOrderItem._id}`}
                    >
                      <Button
                        type="submit"
                        style={{
                          backgroundColor: deliveryBg(
                            userOrderItem.deliveryStatus
                          ).color,
                        }}
                      >
                        Approve
                      </Button>
                    </Form>
                  )}
                  {userOrderItem.orderStatus === 'readyToApprove' && (
                    <Form
                      method="post"
                      action={`/order/order-item/proceed-to-not-approved/${userOrderItem._id}`}
                    >
                      <Button
                        type="submit"
                        style={{
                          backgroundColor: 'red',
                          marginTop: '1rem',
                        }}
                      >
                        Not Approve
                      </Button>
                    </Form>
                  )}
                  {userOrderItem.orderStatus === 'notApproved' && (
                    <div>
                      <h2 className="seller-feedback-status">
                        Waiting for Seller Feedback
                      </h2>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </PageWrapper>
  );
};
export default OrderItem;
