import Wrapper from '../assets/wrappers/OrderItemTitle';

const OrderItemTitle = ({ orderItem, isSeller }) => {
  return (
    <Wrapper>
      {isSeller ? (
        <h3>To: {orderItem.user.fullName}</h3>
      ) : (
        <h3>From: {orderItem.seller.fullName}</h3>
      )}
    </Wrapper>
  );
};
export default OrderItemTitle;
