import { redirect, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Order';
import customFetch from '../utils/customFetch';
import { OrderListItem } from '../component';

export const loader = async () => {
  try {
    const { data: userOrders } = await customFetch.get(
      '/orders/user/get-order'
    );

    const response = userOrders.userOrders;
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const Order = () => {
  const response = useLoaderData();
  return (
    <Wrapper>
      <h1 className="order-title">Order List</h1>
      {response.map((order) => (
        <OrderListItem key={order._id} orderListItemData={order} />
      ))}
    </Wrapper>
  );
};
export default Order;
