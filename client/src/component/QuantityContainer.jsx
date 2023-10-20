/* eslint-disable react/prop-types */
import { FaArrowAltCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import { useDashboardContext } from '../contexts/dashboardContext/dashboardContext';
// import { useDashboardContext } from '../routes/DashboardLayout';

const QuantityContainer = ({ product }) => {
  const {
    decreaseQuantityFromCart,
    increaseQuantityFromCart,
    removeItemFromCart,
  } = useDashboardContext();
  const { quantity, countInStock } = product;
  const handleDecreaseQuantityFromCart = () =>
    decreaseQuantityFromCart(product);

  const handleIncreaseQuantityFromCart = () =>
    increaseQuantityFromCart(product);

  const handleRemoveItemFromCart = () => removeItemFromCart(product);
  return (
    <div className="checkout-item-quantity-container">
      <div>
        <FaArrowCircleLeft onClick={handleDecreaseQuantityFromCart} />
        <span className="checkout-item-quantity">{quantity}</span>
        {countInStock > 0 && countInStock > quantity ? (
          <FaArrowAltCircleRight onClick={handleIncreaseQuantityFromCart} />
        ) : (
          ''
        )}
      </div>
      <div className="remove-button" onClick={handleRemoveItemFromCart}>
        <span>x</span>
      </div>
    </div>
  );
};
export default QuantityContainer;
