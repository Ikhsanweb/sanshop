/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ProductComponent';
import { useDashboardContext } from '../contexts/dashboardContext/dashboardContext';
// import { useDashboardContext } from '../routes/DashboardLayout';

const ProductComponent = ({ product }) => {
  const { addProductToCart, cartItems } = useDashboardContext();
  const { _id, brand, name, price, countInStock, image } = product;
  const navigate = useNavigate();
  const handlerNavigate = () => navigate(`/dashboard/product-showcase/${_id}`);

  const handlerAddProductToCart = () => addProductToCart(product);

  const aquiredItem = cartItems.filter((e) => e._id === _id);

  return (
    <Wrapper>
      <div className="product-item">
        <div className="product-image" onClick={handlerNavigate}>
          {image && <img src={image} className="product-img" />}
        </div>
        <div className="product-info" onClick={handlerNavigate}>
          <div className="product-main-info">
            <h2 className="product-name">
              {name.length >= 20 ? name.substring(0, 20) + '...' : name}
            </h2>
            <h4 className="product-brand">{brand}</h4>
          </div>
          <h3 className="product-price">$ {price}</h3>
        </div>
        <div className="button-container">
          {(cartItems && cartItems.length === 0) ||
          !aquiredItem[0]?.quantity ? (
            <button
              type="button"
              className="btn-add"
              onClick={handlerAddProductToCart}
            >
              Add to cart <span>+</span>
            </button>
          ) : aquiredItem[0]?.quantity + 1 > countInStock ? (
            <button type="button" className="btn" disabled>
              maxed
            </button>
          ) : (
            <button
              type="button"
              className="btn-add"
              onClick={handlerAddProductToCart}
            >
              Add to cart <span>+</span>
            </button>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
export default ProductComponent;
