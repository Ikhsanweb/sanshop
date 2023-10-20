import Wrapper from '../assets/wrappers/SellerOrder';
import { Form, useLoaderData } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import {
  FaBox,
  FaHourglass,
  FaShippingFast,
} from 'react-icons/fa';
import { IoReturnDownBack, IoReturnUpBack } from 'react-icons/io5';
import Button from '../component/Button';
import PageWrapper from '../component/PageWrapper';
import { CustomerOrderInfo, OrderDetailStatusInfo, OrderDetailTotalPrice, OrderItemSecondaryTitle, OrderItemTitle, OrderStatusInfo, OrderedProduct } from '../component';

export const loader = async ({ params }) => {
  const { orderItemId } = params;
  try {
    const { data: sellerOrderItem } = await customFetch.get(
      `/orders/seller/get-single-order-item/${orderItemId}`
    );

    const response = sellerOrderItem.sellerOrderItem;
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const SellerOrder = () => {
  const sellerOrderItem = useLoaderData();
  const {deliveryStatus,totalPrice,orderStatus} = sellerOrderItem
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
    if (status === 'returned') {
      deliveryState.color = 'red';
      deliveryState.icon = <IoReturnUpBack />;
      return deliveryState;
    }
  };
  return (
    <PageWrapper title="Order item detail">
      <Wrapper>
        <div className="order-ordered-products">
          <div className="order-item">
            <OrderStatusInfo deliveryStatus={deliveryStatus} />
            <OrderDetailStatusInfo
              deliveryStatus={deliveryStatus}
              orderStatus={orderStatus}
            />
            <OrderItemTitle orderItem={sellerOrderItem} isSeller />
            <OrderItemSecondaryTitle />
            <div className="order-item-body">
              {sellerOrderItem.orderedProducts.map((orderedProduct) => {
                return (
                  <OrderedProduct
                    key={orderedProduct._id}
                    orderedProduct={orderedProduct}
                  />
                );
              })}
            </div>
            <CustomerOrderInfo sellerOrderItem={sellerOrderItem} />
            <div className="order-bottom">
              <OrderDetailTotalPrice totalPrice={totalPrice} />
              <div className="order-bottom-function">
                {sellerOrderItem.deliveryStatus === 'pending' && (
                  <Form
                    method="post"
                    action={`/dashboard/store/seller-all-orders/seller-order/proceed-to-shipping/${sellerOrderItem._id}`}
                  >
                    <Button
                      type="submit"
                      style={{
                        backgroundColor: deliveryBg(
                          sellerOrderItem.deliveryStatus
                        ).color,
                      }}
                    >
                      To Shipping
                      <FaShippingFast className="delivery-icon" />
                    </Button>
                  </Form>
                )}
                {sellerOrderItem.deliveryStatus === 'shipping' && (
                  <Form
                    method="post"
                    action={`/dashboard/store/seller-all-orders/seller-order/proceed-to-delivered/${sellerOrderItem._id}`}
                  >
                    <Button
                      type="submit"
                      style={{
                        backgroundColor: deliveryBg(
                          sellerOrderItem.deliveryStatus
                        ).color,
                      }}
                    >
                      To Delivered <FaBox className="delivery-icon" />
                    </Button>
                  </Form>
                )}
                {sellerOrderItem.deliveryStatus === 'returning' && (
                  <Form
                    method="post"
                    action={`/dashboard/store/seller-all-orders/seller-order/proceed-to-returned/${sellerOrderItem._id}`}
                  >
                    <Button
                      type="submit"
                      style={{
                        backgroundColor: deliveryBg(
                          sellerOrderItem.deliveryStatus
                        ).color,
                      }}
                    >
                      To Returned <IoReturnUpBack className="delivery-icon" />
                    </Button>
                  </Form>
                )}
                {sellerOrderItem.deliveryStatus === 'delivered' && (
                  <div>
                    <h2 className="seller-feedback-status">
                      Waiting for user{`'s`} feedback
                    </h2>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </PageWrapper>
  );
};
export default SellerOrder;
