import Wrapper from '../assets/wrappers/OrderDetailTotalPrice';

const OrderDetailTotalPrice = ({ totalPrice }) => {
  return (
    <Wrapper>
      <h5>total</h5>
      <h5>${totalPrice}</h5>
    </Wrapper>
  );
};
export default OrderDetailTotalPrice;
