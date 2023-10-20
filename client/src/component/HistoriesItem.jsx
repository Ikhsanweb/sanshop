import Wrapper from '../assets/wrappers/HistoriesItem';

const HistoriesItem = ({ orderItem, isSeller }) => {
  const { user, seller, orderStatus, deliveryStatus, totalPrice } = orderItem;
  const orderBg = (status) => {
    if (status === 'processing') return 'gray';
    if (status === 'readyToApprove') return 'teal';
    if (status === 'approved') return 'lime';
    if (status === 'notApproved') return 'red';
    if (status === 'return') return 'red';
  };
  const deliveryBg = (status) => {
    'pending', 'shipping', 'delivered', 'returning', 'returned';
    if (status === 'pending') return 'gray';
    if (status === 'shipping') return 'teal';
    if (status === 'delivered') return 'yellowgreen';
    if (status === 'returning') return 'black';
    if (status === 'canceled') return 'red';
  };
  return (
    <Wrapper>
      <div className="order-item-title">
        {isSeller ? (
          <h3>To: {user?.fullName}</h3>
        ) : (
          <h3>From: {seller?.fullName}</h3>
        )}
      </div>
      <div className="order-bottom">
        <div className="order-bottom-status">
          <div className="order-bottom-status-status">
            <h2 className="order-bottom-status-text">Order Status</h2>
            <div
              className="order-bottom-status-orderstatus"
              style={{
                backgroundColor: orderBg(orderStatus),
              }}
            >
              {orderStatus}
            </div>
          </div>
          <div className="order-bottom-status-status">
            <h2 className="order-bottom-status-text">Delivery Status</h2>
            <div
              className="order-bottom-status-deliverystatus"
              style={{
                backgroundColor: deliveryBg(deliveryStatus),
              }}
            >
              {deliveryStatus}
            </div>
          </div>
        </div>
      </div>

      <div className="order-bottom">
        <div className="order-bottom-total">
          <h5>total</h5>
          <h5>${totalPrice}</h5>
        </div>
      </div>
    </Wrapper>
  );
};
export default HistoriesItem;
