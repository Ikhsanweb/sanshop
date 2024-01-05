import { FaArrowAltCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/CheckoutItem';
import QuantityContainer from './QuantityContainer';
import { useDashboardContext } from '../contexts/dashboardContext/dashboardContext';

const CheckoutItem = ({ cartItem }) => {
  // const {
  //   decreaseQuantityFromCart,
  //   increaseQuantityFromCart,
  //   removeItemFromCart,
  // } = useDashboardContext();
  const { sellerName, products } = cartItem;
  // const handleDecreaseQuantityFromCart = (product) =>
  //   decreaseQuantityFromCart(product);

  // const handleIncreaseQuantityFromCart = (product) =>
  //   increaseQuantityFromCart(product);
  const totalPriceEach = products.map((product) => {
    return product.price * product.quantity;
  });
  const totalPrice = totalPriceEach.reduce((acc, v) => acc + v, 0);
  // const handleRemoveItemFromCart = (product) => removeItemFromCart(product);
  return (
    <Wrapper>
      <h2 className="checkout-item-header">
        {sellerName}
        {/* <div className="header-line"></div> */}
      </h2>
      <div className="checkout-item-body">
        {products.map((product) => (
          <div key={product._id} className="checkout-item-product">
            <div className="top-line"></div>
            <div className="checkout-item-product-container">
              <div className="image-container">
                {product.image && (
                  <img src={product.image} className="product-img" />
                )}
              </div>
              <div className="product-info-container">
                <div className="checkout-item-product-name-price">
                  <span className="checkout-item-product-name">
                    {product.name.length >= 22
                      ? product.name.substring(0, 22) + '...'
                      : product.name}
                  </span>
                  <div className="checkout-item-product-name">
                    <span>${product.price * product.quantity}</span>
                  </div>
                </div>
                <QuantityContainer product={product} />
                {/* <div className="checkout-item-quantity-container">
                  <div>
                    <span>${product.price * product.quantity}</span>
                    <FaArrowCircleLeft
                      onClick={handleDecreaseQuantityFromCart(product)}
                    />
                    <span className="checkout-item-quantity">
                      {product.quantity}
                    </span>
                    {product.countInStock > 0 &&
                    product.countInStock > product.quantity ? (
                      <FaArrowAltCircleRight
                        onClick={handleIncreaseQuantityFromCart(product)}
                      />
                    ) : (
                      ''
                    )}
                  </div>
                  <div
                    className="remove-button"
                    onClick={handleRemoveItemFromCart(product)}
                  >
                    <span>x</span>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="end-line"></div>
          </div>
        ))}
        <div className="total-price">
          <span>Total : {totalPrice}</span>
        </div>
      </div>
    </Wrapper>
  );
};
export default CheckoutItem;
