import { useOutletContext } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SearchPage';
import { ProductComponent } from '../component';

export const loader = async ({ params }) => {
  return null;
};

const SearchPage = () => {
  const { products } = useOutletContext();

  return (
    <Wrapper>
      <div className="all-products">
        <div className="products-container">
          {products.length === 0
            ? 'Products not found'
            : products.map((product) => {
                return <ProductComponent key={product._id} product={product} />;
              })}
        </div>
      </div>
    </Wrapper>
  );
};
export default SearchPage;
