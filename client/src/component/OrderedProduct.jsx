import Wrapper from '../assets/wrappers/OrderedProduct';

const OrderedProduct = ({ orderedProduct }) => {
  const {
    recordedProduct: { image, name, price },
    quantity,
  } = orderedProduct;
  return (
    <Wrapper>
      <div className="left">
        <div className="image">
          {image && (
            <img className="product-img" src={image} alt="product-img" />
          )}
        </div>
      </div>
      <div className="right">
        <h2>{name}</h2>
        <div className="ordered-products-total">
          <div className="ordered-products-total-info">
            <h3>${price}</h3>
            <h3>
              {` `}x{` `}
            </h3>
            <h3>{quantity}</h3>
          </div>
          <h2>${price * quantity}</h2>
        </div>
      </div>
    </Wrapper>
  );
};
export default OrderedProduct;
