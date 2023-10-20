import { IoLogOut, IoPerson } from 'react-icons/io5';
import Wrapper from '../assets/wrappers/ProductsContainer';
import { useDashboardContext } from '../contexts/dashboardContext/dashboardContext';
import FeaturedComponent from './FeaturedComponent';
import ImageCarousel from './ImageCarousel';
// import { useDashboardContext } from '../routes/DashboardLayout';
import ProductComponent from './ProductComponent';
import { FaFirstOrder, FaHistory } from 'react-icons/fa';
import HomeAccInfo from './HomeAccInfo';

const ProductsContainer = () => {
  const { featuredProducts, products } = useDashboardContext();
  return (
    <Wrapper>
      <ImageCarousel />
      <HomeAccInfo />
      {featuredProducts.length > 1 && (
        <div className="featured">
          <h1>Featured Products</h1>
          <div className="featured-container">
            {featuredProducts.map((product) => {
              return <FeaturedComponent key={product._id} product={product} />;
            })}
          </div>
        </div>
      )}

      <div className="all-products">
        <div className="products-container">
          {products.map((product) => {
            return <ProductComponent key={product._id} product={product} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};
export default ProductsContainer;
