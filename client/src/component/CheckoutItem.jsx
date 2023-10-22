import Wrapper from '../assets/wrappers/CheckoutItem';
import QuantityContainer from './QuantityContainer';

const CheckoutItem = ({ cartItem }) => {
  const { sellerName, products } = cartItem;
  return (
    <Wrapper>
      <h2 className="checkout-item-header">{sellerName}</h2>
      <div className="checkout-item-body">
        {products.map((product) => (
          <div key={product._id} className="checkout-item-product-container">
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
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
export default CheckoutItem;
