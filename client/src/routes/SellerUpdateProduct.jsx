import { Form, redirect, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SellerUpdateProduct';
import customFetch from '../utils/customFetch';
import { FormRow, FormRowSelect, SubmitBtn } from '../component';
import BackNav from '../component/BackNav';
import PageWrapper from '../component/PageWrapper';

export const loader = async ({ params }) => {
  const { productId } = params;
  try {
    const { data: sellerProduct } = await customFetch.get(
      `/products/seller/${productId}`
    );
    const { data: categories } = await customFetch.get(`/categories`);
    const response = {
      product: sellerProduct.sellerProduct,
      categoryList: categories.categories,
    };
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const { productId } = params;
  const file = formData.get('image');
  if (file && file.size > 500000) {
    console.log('image size is too large');
    return null;
  }

  const categoryToFilter = formData.get('categoryToFilter');
  const { data: categories } = await customFetch.get(`/categories`);
  const categoryList = categories.categories;
  const categoryId = categoryList.filter(
    (takedcategory) => takedcategory.name === categoryToFilter
  );
  formData.delete('categoryToFilter');
  formData.append('category', categoryId[0]._id);

  try {
    const updatedProduct = await customFetch.patch(
      `/products/seller/${productId}`,
      formData
    );
    console.log(updatedProduct);
    return redirect('/dashboard/store/seller-all-products');
    // return null;
  } catch (error) {
    console.log(error);
    return error;
  }
  // return null;
};

const SellerUpdateProduct = () => {
  const { product, categoryList } = useLoaderData();
  const categoryNameList = categoryList.map((category) => {
    return category.name;
  });
  return (
    <PageWrapper title={`Update product`}>
      <Wrapper>
        <Form method="post" encType="multipart/form-data">
          <div className="form-row">
            <label htmlFor="image" className="form-label">
              Select an image file (max 0.5 MB)
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="form-input"
              accept="image/*"
            />
          </div>
          <FormRow
            type="text"
            labelText="name"
            name="name"
            defaultValue={product.name}
          />
          <FormRow
            type="text"
            labelText="description"
            name="description"
            defaultValue={product.description}
          />
          <FormRow
            type="text"
            labelText="richDescription"
            name="richDescription"
            defaultValue={product.richDescription}
          />
          <FormRow
            type="text"
            labelText="brand"
            name="brand"
            defaultValue={product.brand}
          />
          <FormRow
            type="number"
            labelText="price"
            name="price"
            defaultValue={product.price}
          />
          <FormRowSelect
            name="categoryToFilter"
            labelText="category"
            defaultValue={product.category.name}
            list={categoryNameList}
          />
          <FormRow
            type="number"
            labelText="countInStock"
            name="countInStock"
            defaultValue={product.countInStock}
          />

          <SubmitBtn />
        </Form>
      </Wrapper>
    </PageWrapper>
  );
};
export default SellerUpdateProduct;
