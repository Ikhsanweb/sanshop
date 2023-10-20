import { useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Order';
import customFetch from '../utils/customFetch';

export const loader = async ({ params }) => {
  try {
    const { orderId } = params;
    const { data: userOrder } = await customFetch.get(
      `/orders/user/get-order/${orderId}`
    );
    const response = userOrder.userOrder;
    // console.log(response);
    return response;
    // return null;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const OrderDetail = () => {
  const orderDetail = useLoaderData();
  const { orderItems, wholeTotalPrice } = orderDetail;
  console.log(orderDetail);
  return (
    <Wrapper>
      <div className="order-container">
        {orderItems.map((orderItem) => {
          return (
            <div key={orderItem._id} className="order-item-container">
              <div>
                <h1>{orderItem.seller.fullName}</h1>
              </div>
              {orderItem.orderedProducts.map((orderedProduct) => (
                <div
                  key={orderedProduct.product._id}
                  className="ordered-products-container"
                >
                  <div className="ordered-products-top">
                    <h4>{orderedProduct.product.brand}</h4>
                    <h3>{orderedProduct.product.name}</h3>
                    <h5>{orderedProduct.product.price}</h5>
                  </div>
                  <div className="ordered-products-bottom">
                    <h3>{orderedProduct.quantity}</h3>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
        <div className="total-price">
          <h2>{wholeTotalPrice}</h2>
        </div>
        {/* <div className="order-detail-button">
          <button className="btn btn-block">
            <Link className="order-button-link" to={`order-detail/${_id}`}>
              See the details
            </Link>
          </button>
        </div> */}
      </div>
    </Wrapper>
  );
};
export default OrderDetail;
