import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SellerAllProducts';
import customFetch from '../utils/customFetch';
import Button from '../component/Button';
import BackNav from '../component/BackNav';
import PageWrapper from '../component/PageWrapper';

export const loader = async () => {
  try {
    const { data: sellerProducts } = await customFetch.get('/products/seller');

    const response = sellerProducts.sellerProducts;
    return response;
    // console.log(data);
    // return null;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const SellerAllProducts = () => {
  const sellerProducts = useLoaderData();
  const navigate = useNavigate();
  console.log(sellerProducts);
  return (
    <PageWrapper title={`All products`}>
      <Wrapper>
        {sellerProducts.map((sellerProduct) => {
          const handlerNavigate = () =>
            navigate(
              `/dashboard/store/seller-product-detail/${sellerProduct._id}`
            );
          return (
            <div className="seller-product" key={sellerProduct._id}>
              <div className="product-item">
                <div className="product-image" onClick={handlerNavigate}>
                  {sellerProduct.image ? (
                    <div className="avatar">
                      <img
                        src={sellerProduct.image}
                        alt="avatar"
                        className="img"
                      />
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
                <div className="product-info" onClick={handlerNavigate}>
                  <div className="product-main-info">
                    <h2 className="product-name">
                      {sellerProduct.name.length >= 20
                        ? sellerProduct.name.substring(0, 20) + '...'
                        : sellerProduct.name}
                    </h2>
                    <h4 className="product-brand">{sellerProduct.brand}</h4>
                  </div>
                  <h3 className="product-price">$ {sellerProduct.price}</h3>
                </div>
              </div>
              <div className="seller-product-buttons">
                <Link
                  to={`/dashboard/store/seller-product-detail/${sellerProduct._id}`}
                  className="seller-product-buttons-link"
                >
                  <div className="seller-product-buttons-link-text">Detail</div>
                </Link>
                <Link
                  to={`/dashboard/store/seller-update-product/${sellerProduct._id}`}
                  className="seller-product-buttons-link"
                >
                  <div className="seller-product-buttons-link-text">Edit</div>
                </Link>
              </div>
            </div>
          );
        })}
      </Wrapper>
    </PageWrapper>
  );
};
export default SellerAllProducts;
