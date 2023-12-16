import { Form, redirect, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SellerAddProduct';
import { FormRow, FormRowSelect, SubmitBtn } from '../component';
import customFetch from '../utils/customFetch';
import PageWrapper from '../component/PageWrapper';
import { toast } from 'sonner';

export const loader = async () => {
  try {
    const { data: categories } = await customFetch.get(`/categories`);
    const response = {
      categoryList: categories.categories,
    };
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get('image');
  if (file && file.size > 500000) {
    toast.error('image size is too large');
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
    await customFetch.post(`/products/seller`, formData);
    toast.success('Product is added successfully');
    return redirect('/dashboard/store/seller-all-products');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const SellerAddProduct = () => {
  const { categoryList } = useLoaderData();
  const categoryNameList = categoryList.map((category) => {
    return category.name;
  });
  return (
    <PageWrapper title={`Add new product`}>
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
          <FormRow type="text" labelText="name" name="name" />
          <FormRow type="text" labelText="description" name="description" />
          <FormRow
            type="text"
            labelText="richDescription"
            name="richDescription"
          />
          <FormRow type="text" labelText="brand" name="brand" />
          <FormRow type="number" labelText="price" name="price" />
          <FormRowSelect
            name="categoryToFilter"
            labelText="categoryToFilter"
            list={categoryNameList}
          />
          <FormRow type="number" labelText="countInStock" name="countInStock" />

          <SubmitBtn />
        </Form>
      </Wrapper>
    </PageWrapper>
  );
};
export default SellerAddProduct;
