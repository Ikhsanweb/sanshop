import Wrapper from '../assets/wrappers/ProductsContainer';
import { useDashboardContext } from '../contexts/dashboardContext/dashboardContext';
import FeaturedComponent from './FeaturedComponent';
import ImageCarousel from './ImageCarousel';
// import { useDashboardContext } from '../routes/DashboardLayout';
import ProductComponent from './ProductComponent';
import HomeAccInfo from './HomeAccInfo';
import { IoBag } from 'react-icons/io5';

const ProductsContainer = () => {
  const { featuredProducts, products } = useDashboardContext();
  return (
    <Wrapper>
      <ImageCarousel />
      <HomeAccInfo />
      {featuredProducts.length > 1 && (
        <div className="featured">
          <div className="featured-container">
            <div className="featured-title">
              <h1>
                Featured<br></br>Products
              </h1>
              <h4>
                limited<br></br>offer
              </h4>
              <div className="featured-icon">
                <IoBag />
              </div>
            </div>
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
