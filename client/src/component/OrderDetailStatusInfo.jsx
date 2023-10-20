import { FaBox, FaHourglass, FaShippingFast } from 'react-icons/fa';
import { IoReturnDownBack, IoReturnUpBack } from 'react-icons/io5';
import Wrapper from '../assets/wrappers/OrderDetailStatusInfo';

const OrderDetailStatusInfo = ({ orderStatus, deliveryStatus }) => {
  const orderBg = (status) => {
    if (status === 'processing') return 'gray';
    if (status === 'readyToApprove') return 'teal';
    if (status === 'approved') return 'lime';
    if (status === 'notApproved') return 'black';
    if (status === 'return') return 'red';
  };
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
      <div className="order-detail-status-status">
        <h2 className="order-detail-status-text">Order Status</h2>
        <div
          className="order-detail-status-orderstatus"
          style={{
            backgroundColor: orderBg(orderStatus),
          }}
        >
          {orderStatus}
        </div>
      </div>
      <div className="order-detail-status-status">
        <h2 className="order-detail-status-text">Delivery Status</h2>
        <div
          className="order-detail-status-deliverystatus"
          style={{
            backgroundColor: deliveryBg(deliveryStatus).color,
          }}
        >
          {deliveryStatus}
        </div>
      </div>
    </Wrapper>
  );
};
export default OrderDetailStatusInfo;
