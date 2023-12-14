/* eslint-disable no-unused-vars */
import {
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import Wrapper from '../assets/wrappers/Payment';
import { FormRow } from '../component';
// import { useDashboardContext } from './DashboardLayout';
import { useMemo, useState } from 'react';
import customFetch from '../utils/customFetch';
import { useDashboardContext } from '../contexts/dashboardContext/dashboardContext';
import { redirect, useNavigate } from 'react-router-dom';
import BackNav from '../component/BackNav';
import Button from '../component/Button';
import PageWrapper from '../component/PageWrapper';

const useOptions = () => {
  const options = useMemo(() => ({
    style: {
      base: {
        fontSize: '20px',
        color: 'var(--text-color)',
        letterSpacing: '0.025em',
        '::placeholder': {
          color: 'lightblue',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }));
  return options;
};

const Payment = () => {
  const { user, cartItems, setCartItems } = useDashboardContext();

  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const navigate = useNavigate();
  // const [orderItems, setOrderItems] = useState([]);
  const [shippingAdress1, setShippingAdress1] = useState('');
  const [shippingAdress2, setShippingAdress2] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleShippingAdress1 = (event) => {
    setShippingAdress1(event.target.value);
  };
  const handleShippingAdress2 = (event) => {
    setShippingAdress2(event.target.value);
  };
  const handleCity = (event) => {
    setCity(event.target.value);
  };
  const handleZipCode = (event) => {
    setZipCode(event.target.value);
  };
  const handleCountry = (event) => {
    setCountry(event.target.value);
  };
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const {
    address: userAddress,
    city: userCity,
    country: userCountry,
    fullName,
    phoneNumber: userPhoneNumber,
    zipCode: userZipCode,
    _id: userId,
  } = user;

  const handlePayment = async (e) => {
    e.preventDefault();
    const sellerIdsOnly = cartItems.map((cartItem) => cartItem.createdBy._id);
    const sellerUniqueId = sellerIdsOnly.filter(
      (v, i, a) => a.indexOf(v) === i
    );
    const sellerUniquesArray = sellerUniqueId.map((sellerId, i) => {
      return {
        orderedProducts: [],
        shippingAdress1:
          shippingAdress1 || e.target.elements.shippingAdress1.value,
        shippingAdress2:
          shippingAdress2 || e.target.elements.shippingAdress2.value,
        city: city || e.target.elements.city.value,
        zipCode: zipCode || e.target.elements.zipCode.value,
        country: country || e.target.elements.country.value,
        phoneNumber: phoneNumber || e.target.elements.phoneNumber.value,
        seller: sellerId,
        user: userId,
      };
    });

    cartItems.map((cartItem) => {
      sellerUniqueId.map((sellerId, i) => {
        if (sellerId === cartItem.createdBy._id) {
          if (sellerUniquesArray[i].seller === cartItem.createdBy._id) {
            const sortedCart = {
              product: cartItem._id,
              quantity: cartItem.quantity,
            };
            return sellerUniquesArray[i].orderedProducts.push(sortedCart);
          }
        }
      });
    });

    if (!stripe || !elements) {
      return;
    }

    try {
      const response = await customFetch.post(
        '/orders/user/create-order',
        {
          orderItems: sellerUniquesArray,
        }
        // config
      );
      // return redirect('/dashboard');

      const clientSecretId = response.data.resolvedOrder.stripePaymentIntentId;
      const successOrderId = response.data.resolvedOrder._id;

      setCartItems([]);

      const paymentResult = await stripe.confirmCardPayment(clientSecretId, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: fullName,
            address: {
              city: city || e.target.elements.city.value,
              postal_code: zipCode || e.target.elements.zipCode.value,
              line1: shippingAdress1 || e.target.elements.shippingAdress1.value,
              line2: shippingAdress2 || e.target.elements.shippingAdress2.value,
            },
            phone: phoneNumber || e.target.elements.phoneNumber.value,
          },
        },
      });

      if (paymentResult.error) {
        alert(paymentResult.error);
      }
      if (paymentResult.paymentIntent.status === 'succeeded') {
        console.log(paymentResult.paymentIntent.status);
        return navigate(`/order/order-success/${successOrderId}`);
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  return (
    <PageWrapper title="Make a Payment">
      <Wrapper>
        <div className="body">
          <form onSubmit={handlePayment}>
            <FormRow
              type="text"
              name="shippingAdress1"
              defaultValue={userAddress}
              onChange={handleShippingAdress1}
            />
            <FormRow
              type="text"
              name="shippingAdress2"
              defaultValue={userAddress}
              onChange={handleShippingAdress2}
            />
            <FormRow
              type="text"
              name="city"
              defaultValue={userCity}
              onChange={handleCity}
            />
            <FormRow
              type="text"
              name="zipCode"
              defaultValue={userZipCode}
              onChange={handleZipCode}
            />
            <FormRow
              type="text"
              name="country"
              defaultValue={userCountry}
              onChange={handleCountry}
            />
            <FormRow
              type="text"
              name="phoneNumber"
              defaultValue={userPhoneNumber}
              onChange={handlePhoneNumber}
            />
            <div className="card-container">
              <h2 className="card-title">Credit Card Payment :</h2>
              {/* <CardElement options={options} /> */}
              <div className="card">
                <h5>Card Number</h5>
                <CardNumberElement options={options} />
              </div>

              <div className="card">
                <h5>Card Expiry</h5>
                <CardExpiryElement options={options} />
              </div>

              <div className="card">
                <h5>Card CVC</h5>
                <CardCvcElement options={options} />
              </div>
            </div>
            <Button type="submit">CHECKOUT</Button>
          </form>
        </div>
      </Wrapper>
    </PageWrapper>
  );
};
export default Payment;
