import dayjs from 'dayjs';
import { Wrapper } from './BagDetailStyles';
import {
  FaBox,
  FaCheckCircle,
  FaCheckDouble,
  FaHourglass,
  FaShippingFast,
  FaTruck,
} from 'react-icons/fa';
import { IoReturnDownBack, IoReturnUpBack } from 'react-icons/io5';
import { ImUser } from 'react-icons/im';
import { MdStoreMallDirectory } from 'react-icons/md';
import { Form, useNavigation } from 'react-router-dom';
import Button from '../Button';
import Spinner from '../Spinner';

const BagDetail = ({ items, isSeller }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const {
    _id,
    user,
    seller,
    orderedProducts,
    totalPrice,
    dateOrdered,
    deliveryStatus,
    orderStatus,
    shippingAdress1,
    shippingAdress2,
    city,
    country,
    phoneNumber,
    zipCode,
  } = items;
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
  const fullDate = dayjs(newDate).format('dddd, DD MMM YYYY hh:mm A');
  const day = dayjs(newDate).format('DD');
  const month = dayjs(newDate).format('MMM');
  const year = dayjs(newDate).format('YYYY');

  const temp = 'returning';
  const tempo = 'return';
  const checkLinePending = (status) => {
    if (status === 'pending') {
      return 'lightgrey';
    }
    return 'var(--text-color)';
  };

  const checkLineShipping = (status) => {
    if (status === 'pending') {
      return 'lightgrey';
    }
    if (
      status === 'shipping' ||
      status === 'delivered' ||
      status === 'delivered' ||
      status === 'returning' ||
      status === 'canceled'
    ) {
      return 'var(--text-color)';
    }
  };
  const checkLineDelivered = (status) => {
    if (status === 'pending' || status === 'shipping') {
      return 'lightgrey';
    }
    if (
      status === 'delivered' ||
      status === 'returning' ||
      status === 'canceled'
    ) {
      return 'var(--text-color)';
    }
  };

  const checkLineReturning = (status) => {
    if (
      status === 'pending' ||
      status === 'shipping' ||
      status === 'delivered'
    ) {
      return 'lightgrey';
    }
    if (status === 'returning' || status === 'canceled') {
      return 'var(--text-color)';
    }
  };

  const checkLineReturn = (status) => {
    if (status === 'return') {
      return 'red';
    }
    return 'lightgrey';
  };
  const checkLineLineReturn = (status) => {
    if (status === 'return') {
      return 'var(--text-color)';
    }
    return 'lightgrey';
  };

  const checkStatusApproved = (status) => {
    if (status === 'approved') {
      return 'flex';
    }
    return 'none';
  };

  const checkStatusReturning = (status, orderStatus) => {
    if (
      status === 'returning' ||
      orderStatus === 'notApproved' ||
      status === 'canceled'
    ) {
      return 'flex';
    }
    return 'none';
  };

  const checkStatusCanceled = (status) => {
    if (status === 'canceled') {
      return 'flex';
    }
    return 'none';
  };

  const checkLineApproved = (status, deliveryStatus) => {
    if (status === 'approved') {
      return 'var(--text-color)';
    }
    if (deliveryStatus === 'returning' || deliveryStatus === 'canceled') {
      return 'var(--text-color)';
    }
    return 'lightrey';
  };

  const checkLineDeliveredSingle = (status, orderStatus) => {
    if (orderStatus === 'approved' && status === 'delivered') {
      return 'flex';
    }
    if (orderStatus === 'notApproved' || status === 'returning') {
      return 'flex';
    }
    // if (orderStatus === 'notAproved') {
    //   return 'flex';
    // }
    if (
      status === 'pending' ||
      status === 'shipping' ||
      status === 'delivered'
    ) {
      return 'none';
    }

    return 'flex';
  };

  const checkStatusLineApproved = (status) => {
    if (status === 'approved') {
      return 'var(--the-primary-color)';
    }
  };

  const showDateShipping = (status) => {
    if (status === 'pending') {
      return 'none';
    }
    return 'block';
  };

  const showDateDelivered = (status) => {
    if (status === 'pending' || status === 'shipping') {
      return 'none';
    }
    if (
      status === 'delivered' ||
      status === 'returning' ||
      status === 'canceled'
    ) {
      return 'block';
    }
  };

  const showDateReturning = (status) => {
    if (
      status === 'pending' ||
      status === 'shipping' ||
      status === 'delivered'
    ) {
      return 'none';
    }
    if (status === 'returning' || status === 'canceled') {
      return 'block';
    }
  };

  const showDateReturn = (status) => {
    if (status === 'return') {
      return 'block';
    }
    return 'none';
  };

  return (
    <Wrapper>
      <div
        className="delivery-status"
        style={{ backgroundColor: deliveryBg(deliveryStatus).color }}
      >
        <div className="left">
          <span className="delivery-status-title">delivery status</span>
          <span className="delivery-status-text">{deliveryStatus}</span>
        </div>
        <div className="right">
          <span>{deliveryBg(deliveryStatus).icon}</span>
        </div>
      </div>
      <div className="order-info">
        <div className="order-title">Order Detail</div>
        <div className="body">
          <div className="info-item">
            <span className="info-item-title">Order ID</span>
            <span className="info-item-text">{_id}</span>
          </div>
          <div className="info-item">
            <span className="info-item-title">Date Placed</span>
            <span className="info-item-text">{takenDate}</span>
          </div>
        </div>
      </div>
      <div className="dash-line"></div>
      <div className="ordered-products">
        <div className="order-seller">
          <div className="order-seller-icon">
            {isSeller ? <ImUser /> : <MdStoreMallDirectory />}
          </div>
          <div className="order-seller-name">
            {isSeller ? user?.fullName : seller?.fullName}
          </div>
        </div>
        <div className="body">
          {orderedProducts.map((orderedProduct) => (
            <div className="ordered-product" key={orderedProduct?._id}>
              <div className="left">
                <img
                  src={orderedProduct?.recordedProduct?.image}
                  alt={orderedProduct?.recordedProduct?.name}
                />
              </div>
              <div className="right">
                <span className="product-name">
                  {orderedProduct?.recordedProduct?.name}
                </span>
                <span className="product-quantity">
                  Qty: {orderedProduct?.quantity}
                </span>
                <span className="product-price">
                  $
                  {orderedProduct?.recordedProduct?.price *
                    orderedProduct?.quantity}
                </span>
              </div>
            </div>
          ))}
          {/* <div className="dash-line"></div> */}
        </div>
      </div>
      {/* <div className="dash-line"></div> */}
      <div className="total">
        <div className="total-info">
          <div className="left">amount</div>
          <div className="right">{totalPrice},00</div>
        </div>
        <div className="total-info">
          <div className="left">delivery charge</div>
          <div className="right">0,00</div>
        </div>
        <div className="total-info">
          <div className="left">discount</div>
          <div className="right">(0%)</div>
        </div>
        <div className="total-info">
          <div className="left">total</div>
          <div className="right">{totalPrice},00</div>
        </div>
      </div>
      <div className="dash-line"></div>
      <div className="customer-info">
        <div className="order-title">Customer Info</div>
        <div className="body">
          <div className="info-item">
            <span className="info-item-title">name</span>
            <span className="info-item-text">{user?.fullName}</span>
          </div>
          <div className="info-item">
            <span className="info-item-title">phone number</span>
            <span className="info-item-text">{phoneNumber}</span>
          </div>
          <div className="info-item">
            <span className="info-item-title">shipping address 1</span>
            <span className="info-item-text">{shippingAdress1}</span>
          </div>
          <div className="info-item">
            <span className="info-item-title">shipping address 2</span>
            <span className="info-item-text">{shippingAdress2}</span>
          </div>
          <div className="info-item">
            <span className="info-item-title">city</span>
            <span className="info-item-text">{city}</span>
          </div>
          <div className="info-item">
            <span className="info-item-title">country</span>
            <span className="info-item-text">{country}</span>
          </div>
          <div className="info-item">
            <span className="info-item-title">Zip code</span>
            <span className="info-item-text">{zipCode}</span>
          </div>
        </div>
      </div>
      <div className="dash-line"></div>
      <div className="track-order">
        <div className="order-title">Order Status</div>
        <div className="body">
          {/* -------------------------- */}

          <div className="track-order-item">
            <div className="left">
              <div className="check-icon">
                <FaCheckCircle style={{ color: 'var(--text-color)' }} />
              </div>
              <div
                className="check-line"
                style={{
                  backgroundColor: `${checkLinePending(deliveryStatus)}`,
                }}
              ></div>
            </div>
            <div className="right">
              <div className="check-status">
                <span
                  className="check-status-text"
                  style={{ color: 'var(--text-color)' }}
                >
                  pending
                </span>
                <span className="check-status-date">{fullDate}</span>
              </div>
              <div className="check-status-icon">
                <FaHourglass style={{ color: 'var(--text-color)' }} />
              </div>
            </div>
          </div>

          {/* -------------------------- */}

          <div className="track-order-item">
            <div className="left">
              <div className="check-icon">
                <FaCheckCircle
                  style={{ color: `${checkLineShipping(deliveryStatus)}` }}
                />
              </div>
              <div
                className="check-line"
                style={{
                  backgroundColor: `${checkLineDelivered(deliveryStatus)}`,
                }}
              ></div>
            </div>
            <div className="right">
              <div className="check-status">
                <span
                  className="check-status-text"
                  style={{ color: `${checkLineShipping(deliveryStatus)}` }}
                >
                  shipping
                </span>
                <span
                  className="check-status-date"
                  style={{ display: `${showDateShipping(deliveryStatus)}` }}
                >
                  {fullDate}
                </span>
              </div>
              <div className="check-status-icon">
                <FaShippingFast
                  style={{ color: `${checkLineShipping(deliveryStatus)}` }}
                />
              </div>
            </div>
          </div>

          {/* -------------------------- */}

          <div className="track-order-item">
            <div className="left">
              <div className="check-icon">
                <FaCheckCircle
                  style={{ color: `${checkLineDelivered(deliveryStatus)}` }}
                />
              </div>
              <div
                className="check-line"
                style={{
                  display: `${checkLineDeliveredSingle(
                    deliveryStatus,
                    orderStatus
                  )}`,
                  backgroundColor: `${checkLineApproved(
                    orderStatus,
                    deliveryStatus
                  )}`,
                }}
              ></div>
            </div>
            <div className="right">
              <div className="check-status">
                <span
                  className="check-status-text"
                  style={{ color: `${checkLineDelivered(deliveryStatus)}` }}
                >
                  delivered
                </span>
                <span
                  className="check-status-date"
                  style={{ display: `${showDateDelivered(deliveryStatus)}` }}
                >
                  {fullDate}
                </span>
              </div>
              <div className="check-status-icon">
                <FaTruck
                  style={{ color: `${checkLineDelivered(deliveryStatus)}` }}
                />
              </div>
            </div>
          </div>

          {/* -------------------------- */}

          <div
            className="track-order-item"
            style={{ display: `${checkStatusApproved(orderStatus)}` }}
          >
            <div className="left">
              <div className="check-icon">
                <FaCheckCircle
                  style={{ color: `${checkStatusLineApproved(orderStatus)}` }}
                />
              </div>
              {/* <div className="check-line"></div> */}
            </div>
            <div className="right">
              <div className="check-status">
                <span
                  className="check-status-text"
                  style={{ color: `${checkStatusLineApproved(orderStatus)}` }}
                >
                  approved
                </span>
                <span className="check-status-date">{fullDate}</span>
              </div>
              <div className="check-status-icon">
                <FaCheckDouble
                  style={{ color: `${checkStatusLineApproved(orderStatus)}` }}
                />
              </div>
            </div>
          </div>

          {/* -------------------------- */}

          <div
            className="track-order-item"
            style={{
              display: `${checkStatusReturning(deliveryStatus, orderStatus)}`,
            }}
          >
            <div className="left">
              <div className="check-icon">
                <FaCheckCircle
                  style={{ color: `${checkLineReturning(deliveryStatus)}` }}
                />
              </div>
              <div
                className="check-line"
                style={{
                  backgroundColor: `${checkLineLineReturn(orderStatus)}`,
                }}
              ></div>
            </div>
            <div className="right">
              <div className="check-status">
                <span
                  className="check-status-text"
                  style={{ color: `${checkLineReturning(deliveryStatus)}` }}
                >
                  returning
                </span>
                <span
                  className="check-status-date"
                  style={{ display: `${showDateReturning(deliveryStatus)}` }}
                >
                  {fullDate}
                </span>
              </div>
              <div className="check-status-icon">
                <IoReturnDownBack
                  style={{ color: `${checkLineReturning(deliveryStatus)}` }}
                />
              </div>
            </div>
          </div>

          {/* -------------------------- */}

          <div
            className="track-order-item"
            style={{
              display: `${checkStatusReturning(deliveryStatus, orderStatus)}`,
            }}
          >
            <div className="left">
              <div className="check-icon">
                <FaCheckCircle
                  style={{ color: `${checkLineReturn(orderStatus)}` }}
                />
              </div>
              {/* <div className="check-line"></div> */}
            </div>
            <div className="right">
              <div className="check-status">
                <span
                  className="check-status-text"
                  style={{ color: `${checkLineReturn(orderStatus)}` }}
                >
                  returned
                </span>
                <span
                  className="check-status-date"
                  style={{ display: `${showDateReturn(orderStatus)}` }}
                >
                  {fullDate}
                </span>
              </div>
              <div className="check-status-icon">
                <IoReturnUpBack
                  style={{ color: `${checkLineReturn(orderStatus)}` }}
                />
              </div>
            </div>
          </div>

          {/* -------------------------- */}
        </div>
      </div>
      <div className="dash-line"></div>
      <div className="order-function">
        <div className="order-bottom">
          {isSeller ? (
            isSubmitting ? (
              <Spinner />
            ) : (
              <div className="order-bottom-function">
                {deliveryStatus === 'pending' && (
                  <Form
                    method="post"
                    action={`/dashboard/store/seller-all-orders/seller-order/proceed-to-shipping/${_id}`}
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="order-button"
                      style={{
                        backgroundColor: deliveryBg(deliveryStatus).color,
                      }}
                    >
                      {isSubmitting ? <Spinner /> : 'To Shipping'}{' '}
                      <FaShippingFast className="delivery-icon" />
                    </button>
                  </Form>
                )}
                {deliveryStatus === 'shipping' && (
                  <Form
                    method="post"
                    action={`/dashboard/store/seller-all-orders/seller-order/proceed-to-delivered/${_id}`}
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="order-button"
                      style={{
                        backgroundColor: deliveryBg(deliveryStatus).color,
                      }}
                    >
                      {isSubmitting ? <Spinner /> : 'To Delivered'}{' '}
                      <FaBox className="delivery-icon" />
                    </button>
                  </Form>
                )}
                {deliveryStatus === 'returning' && (
                  <Form
                    method="post"
                    action={`/dashboard/store/seller-all-orders/seller-order/proceed-to-returned/${_id}`}
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="order-button"
                      style={{
                        backgroundColor: deliveryBg(deliveryStatus).color,
                      }}
                    >
                      {isSubmitting ? <Spinner /> : 'To Returned'}{' '}
                      <IoReturnUpBack className="delivery-icon" />
                    </button>
                  </Form>
                )}
              </div>
            )
          ) : isSubmitting ? (
            <Spinner />
          ) : (
            <div className="order-bottom-function">
              {orderStatus === 'readyToApprove' && (
                <Form
                  method="post"
                  action={`/dashboard/order/order-item/proceed-to-approved/${_id}`}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="order-button"
                    style={{
                      backgroundColor: deliveryBg(deliveryStatus).color,
                    }}
                  >
                    {isSubmitting ? <Spinner /> : 'Approve'}
                  </button>
                </Form>
              )}
              {orderStatus === 'readyToApprove' && (
                <Form
                  method="post"
                  action={`/dashboard/order/order-item/proceed-to-not-approved/${_id}`}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="order-button"
                    style={{
                      backgroundColor: 'red',
                      marginTop: '0.5rem',
                    }}
                  >
                    {isSubmitting ? <Spinner /> : 'Not Approve'}
                  </button>
                </Form>
              )}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
export default BagDetail;
