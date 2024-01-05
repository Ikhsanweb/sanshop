/* eslint-disable react/prop-types */
import {
  FaArrowAltCircleRight,
  FaArrowCircleLeft,
  FaMinus,
  FaMinusSquare,
  FaPlus,
  FaPlusSquare,
  FaTrashAlt,
} from 'react-icons/fa';
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
      <span className="checkout-item-quantity-text">{quantity}</span>
      <div className="checkout-item-quantity">
        {countInStock > 0 && countInStock > quantity ? (
          <FaPlusSquare
            className="checkout-item-quantity-icon"
            onClick={handleIncreaseQuantityFromCart}
          />
        ) : (
          ''
        )}
        <FaMinusSquare
          className="checkout-item-quantity-icon"
          onClick={handleDecreaseQuantityFromCart}
        />
      </div>
      <div className="remove-button" onClick={handleRemoveItemFromCart}>
        <span className="remove-button-span">
          <FaTrashAlt className="remove-button-icon" />
        </span>
      </div>
    </div>
  );
};
export default QuantityContainer;
