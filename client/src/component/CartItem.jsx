import Wrapper from '../assets/wrappers/CartItem';

const CartItem = ({ cartItem }) => {
  const { sellerName, products } = cartItem;
  return (
    <Wrapper>
      <div className="seller-name">
        <h2>{sellerName}</h2>
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product._id} className="product-info">
            <span className="product-name">
              {product.name.length >= 22
                ? product.name.substring(0, 22) + '...'
                : product.name}
            </span>
            <div className="product-quantity">
              <span>x {product.quantity}</span>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
export default CartItem;
