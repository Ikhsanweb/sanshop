import dayjs from 'dayjs';
import Wrapper from '../assets/wrappers/CustomerOrderInfo';

const CustomerOrderInfo = ({ sellerOrderItem }) => {
  const {
    city,
    country,
    shippingAdress1,
    shippingAdress2,
    phoneNumber,
    dateOrdered,
  } = sellerOrderItem;

  const newDate = new Date(dateOrdered);
  const takenDate = dayjs(newDate).format('DD MMM YYYY');
  return (
    <Wrapper>
      <div className="user-address-title">
        <h3>Customer Address Info</h3>
      </div>
      <div className="user-address-info">
        <div className="user-address-info-item">
          <h5>City</h5>
          <h3>{city}</h3>
        </div>
        <div className="user-address-info-item">
          <h5>Country</h5>
          <h3>{country}</h3>
        </div>
        <div className="user-address-info-item">
          <h5>Shipping Address 1</h5>
          <h3>{shippingAdress1}</h3>
        </div>
        <div className="user-address-info-item">
          <h5>Shipping Address 2</h5>
          <h3>{shippingAdress2}</h3>
        </div>
        <div className="user-address-info-item">
          <h5>Date Ordered</h5>
          <h3>{takenDate}</h3>
        </div>
        <div className="user-address-info-item">
          <h5>Phone Number</h5>
          <h3>{phoneNumber}</h3>
        </div>
      </div>
    </Wrapper>
  );
};
export default CustomerOrderInfo;
