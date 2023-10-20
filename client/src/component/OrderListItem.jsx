/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/OrderListItem';

const OrderListItem = ({ orderListItemData }) => {
  const { orderItems, wholeTotalPrice, _id } = orderListItemData;
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
        <div className="order-detail-button">
          <button className="btn btn-block">
            <Link className="order-button-link" to={`order-detail/${_id}`}>
              See the details
            </Link>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default OrderListItem;
