import {
  FaBox,
  FaHourglass,
  FaPlus,
  FaShippingFast,
  FaStore,
  FaStoreAlt,
  FaStoreAltSlash,
  FaUserAlt,
} from 'react-icons/fa';
import { Wrapper } from './OrderbagStyles';
import {
  IoReturnDownBack,
  IoReturnUpBack,
  IoStorefrontOutline,
} from 'react-icons/io5';
import dayjs from 'dayjs';
import OrderDetailStatusInfo from '../OrderDetailStatusInfo';
import { MdStoreMallDirectory } from 'react-icons/md';
import { ImUser } from 'react-icons/im';

const OrderBag = ({ orderItems, isSeller }) => {
  console.log(orderItems);
  const {
    _id,
    seller,
    user,
    orderedProducts,
    totalPrice,
    orderStatus,
    deliveryStatus,
    dateOrdered,
  } = orderItems;

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
  const newDate = new Date(dateOrdered);
  const takenDate = dayjs(newDate).format('DD MMM YYYY');
  const day = dayjs(newDate).format('DD');
  const month = dayjs(newDate).format('MMM');
  const year = dayjs(newDate).format('YYYY');

  return (
    <Wrapper>
      <div
        className="stLayer-left"
        style={{
          backgroundColor: deliveryBg(deliveryStatus).color,
        }}
      ></div>
      <div className="stLayer-right">
        <div className="ndLayer-top">
          <div className="ndLayer-top-left">
            <span className="order-id">Order ID:</span>
            <span className="order-id">{_id}</span>
          </div>
          <div className="ndLayer-top-right">
            <span className="order-day">{day}</span>
            <span className="order-month">{month}</span>
            <span className="order-year">{year}</span>
          </div>
        </div>
        <div className="ndLayer-mid">
          <div className="ndLayer-mid-top">
            <div className="strip-line"></div>
            <div className="order-seller-container">
              <span className="order-seller">
                <div className="order-seller-icon">
                  {isSeller ? <ImUser /> : <MdStoreMallDirectory />}
                </div>
                <div className="seller-name">
                  {isSeller ? user?.fullName : seller?.fullName}
                </div>
              </span>
              <span className="order-length">
                Total: {orderedProducts.length} item
                {orderedProducts.length > 1 ? 's' : ''}
              </span>
            </div>
            {/* <div className="strip-line"></div> */}
          </div>
          <div className="ndLayer-mid-down">
            <div className="strip-line"></div>
            <div className="ndLayer-mid-down-top">
              {orderedProducts.length <= 2 ? (
                <>
                  {orderedProducts.map((orderedProduct) => (
                    <div
                      key={orderedProduct._id}
                      className="orderedProducts-image-container"
                    >
                      <img src={orderedProduct.recordedProduct.image} alt="" />
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <div className="orderedProducts-image-container">
                    <img
                      src={orderedProducts[0].recordedProduct.image}
                      alt=""
                    />
                  </div>
                  <div className="orderedProducts-image-container">
                    <img
                      src={orderedProducts[1].recordedProduct.image}
                      alt=""
                    />
                  </div>
                  <div className="orderedProducts-image-container-plus">
                    <span className="order-plus">
                      <FaPlus />
                      <span className="order-number">
                        {orderedProducts.length - 2} more
                      </span>
                    </span>
                  </div>
                </>
              )}
            </div>
            <div className="ndLayer-mid-down-down">
              <div className="orderedProducts-name-container">
                <span>Item List: </span>
              </div>
              {orderedProducts.length <= 2 ? (
                <>
                  {orderedProducts.map((orderedProduct) => (
                    <div
                      key={orderedProduct._id}
                      className="orderedProducts-name-container"
                    >
                      <span>
                        {orderedProduct.recordedProduct.name.length >= 15
                          ? orderedProduct.recordedProduct.name.substring(
                              0,
                              15
                            ) + '...'
                          : orderedProduct.recordedProduct.name}
                      </span>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <div className="orderedProducts-name-container">
                    <span>
                      {orderedProducts[0].recordedProduct.name.length >= 12
                        ? orderedProducts[0].recordedProduct.name.substring(
                            0,
                            12
                          ) + '...'
                        : orderedProducts[0].recordedProduct.name}
                      ,
                    </span>
                  </div>
                  <div className="orderedProducts-name-container">
                    <span>
                      {orderedProducts[1].recordedProduct.name.length >= 10
                        ? orderedProducts[1].recordedProduct.name.substring(
                            0,
                            10
                          ) + '...'
                        : orderedProducts[1].recordedProduct.name}
                      ,...
                    </span>
                  </div>
                  <div className="orderedProducts-name-container">
                    <span>+{orderedProducts.length - 2} more</span>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="strip-line"></div>
        </div>
        <div className="ndLayer-down">
          <div className="order-total">
            <span className="order-total-title">total cost</span>
            <span className="order-total-price">$ {totalPrice}</span>
          </div>
          <div className="order-detail-status-status">
            <span className="order-detail-status-text">Order Status</span>
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
            <span className="order-detail-status-text">Delivery Status</span>
            <div
              className="order-detail-status-deliverystatus"
              style={{
                backgroundColor: deliveryBg(deliveryStatus).color,
              }}
            >
              {deliveryStatus}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default OrderBag;
