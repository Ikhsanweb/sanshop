import { useLoaderData } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/ProductShowcase';
import dayjs from 'dayjs';
import { useDashboardContext } from '../contexts/dashboardContext/dashboardContext';
import PageWrapper from '../component/PageWrapper';
import { toast } from 'sonner';

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/products/${params.productId}`);
    const response = { data };

    return { response };
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const ProductShowcase = () => {
  const { addProductToCart, cartItems } = useDashboardContext();
  const {
    response: {
      data: { product },
    },
  } = useLoaderData();
  const {
    _id,
    brand,
    name,
    image,
    dateCreated,
    price,
    richDescription,
    countInStock,
  } = product;

  const handlerAddProductToCart = () => addProductToCart(product);

  const aquiredItem = cartItems.filter((e) => e._id === _id);
  const newDate = new Date(dateCreated);
  const takenDate = dayjs(newDate).format('DD MMM YYYY');
  return (
    <PageWrapper
      title={name.length >= 20 ? name.substring(0, 20) + '...' : name}
    >
      <Wrapper>
        <div className="body">
          <div className="top">
            {image && (
              <img src={image} alt="product-img" className="product-img" />
            )}
          </div>
          <div className="title">
            <div className="name">
              <span>{name}</span>
            </div>
            <div className="brand">
              <span>{brand}</span>
            </div>
            <div className="date">
              <span>{takenDate}</span>
            </div>
          </div>
          <div className="description">
            <p>{richDescription}</p>
          </div>
        </div>
        <div className="footer">
          <div className="price">
            <h1>${price}</h1>
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
    </PageWrapper>
  );
};
export default ProductShowcase;
