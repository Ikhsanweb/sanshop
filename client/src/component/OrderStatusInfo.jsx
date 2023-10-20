import { FaBox, FaHourglass, FaShippingFast } from 'react-icons/fa';
import { IoReturnDownBack, IoReturnUpBack } from 'react-icons/io5';
import Wrapper from '../assets/wrappers/OrderStatusInfo';

const OrderStatusInfo = ({ deliveryStatus }) => {
  console.log(deliveryStatus);
  const deliveryBg = (status) => {
    const deliveryState = { color: null, icon: null };
    if (status === 'pending') {
      deliveryState.color = 'gray';
      deliveryState.icon = <FaHourglass />;
      return deliveryState;
    }
    if (status === 'shipping') {
      deliveryState.color = 'teal';
      deliveryState.icon = <FaShippingFast />;
      return deliveryState;
    }
    if (status === 'delivered') {
      deliveryState.color = 'yellowgreen';
      deliveryState.icon = <FaBox />;
      return deliveryState;
    }
    if (status === 'returning') {
      deliveryState.color = 'black';
      deliveryState.icon = <IoReturnDownBack />;
      return deliveryState;
    }
    if (status === 'canceled') {
      deliveryState.color = 'red';
      deliveryState.icon = <IoReturnUpBack />;
      return deliveryState;
    }
  };
  return (
    <Wrapper>
      <div
        className="order-status-info"
        style={{
          backgroundColor: deliveryBg(deliveryStatus).color,
        }}
      >
        <div className="order-status-info-text">
          <h5>Delivery Status</h5>
          <h1>{deliveryStatus}</h1>
        </div>
        <div className="order-status-info-icon">
          {deliveryBg(deliveryStatus).icon}
        </div>
      </div>
    </Wrapper>
  );
};
export default OrderStatusInfo;
