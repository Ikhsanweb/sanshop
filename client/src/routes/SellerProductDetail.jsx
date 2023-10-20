import {
  Form,
  Link,
  redirect,
  useLoaderData,
  useNavigation,
} from 'react-router-dom';
import Wrapper from '../assets/wrappers/SellerProductDetail';
import customFetch from '../utils/customFetch';
import dayjs from 'dayjs';
import BackNav from '../component/BackNav';
import Button from '../component/Button';
import PageWrapper from '../component/PageWrapper';

export const loader = async ({ params }) => {
  const { productId } = params;
  try {
    const { data: sellerProduct } = await customFetch.get(
      `/products/seller/${productId}`
    );

    const response = sellerProduct.sellerProduct;
    return response;
    // console.log(data);
    // return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const { productId } = await Object.fromEntries(formData);
  // return null;

  try {
    await customFetch.delete(`/products/seller/${productId}`);
    return redirect('/dashboard/store/seller-all-products');
    // return null;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const SellerProductDetail = () => {
  const sellerProduct = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const { name, brand, dateCreated, richDescription, image } = sellerProduct;
  const newDate = new Date(dateCreated);
  const takenDate = dayjs(newDate).format('DD MMM YYYY');
  console.log(sellerProduct);
  return (
    <PageWrapper
      title={name.length >= 20 ? name.substring(0, 20) + '...' : name}
    >
      <Wrapper>
        <div className="body">
          <div className="top">
            {image && (
              <img src={image} alt="product-image" className="product-image" />
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
          <div className="delete-button">
            <Form method="post">
              <input
                type="hidden"
                id="productId"
                name="productId"
                value={sellerProduct._id}
              />

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'deleting ....' : 'delete'}
              </Button>
            </Form>
          </div>
        </div>
      </Wrapper>
    </PageWrapper>
  );
};
export default SellerProductDetail;
