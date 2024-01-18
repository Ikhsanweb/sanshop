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
import { FormRow, Spinner, SubmitBtn } from '../component';
import { useEffect, useMemo, useState } from 'react';
import customFetch from '../utils/customFetch';
import { useDashboardContext } from '../contexts/dashboardContext/dashboardContext';
import { redirect, useNavigate } from 'react-router-dom';
import BackNav from '../component/BackNav';
import Button from '../component/Button';
import PageWrapper from '../component/PageWrapper';
import { toast } from 'sonner';

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
  const [shippingAdress1, setShippingAdress1] = useState('');
  const [shippingAdress2, setShippingAdress2] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentIsLoading, setPaymentIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);

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

  // const sellerIdsOnly = cartItems.map((cartItem) => cartItem.createdBy._id);
  // const sellerUniqueId = sellerIdsOnly.filter((v, i, a) => a.indexOf(v) === i);

  const registerCartItems = (cartItems) => {
    cartItems.map(async (cartItem) => {
      setIsReady(true);
      try {
        const anotherFetchToRecordedProducts = await customFetch.get(
          '/recorded-products'
        );
        console.log(anotherFetchToRecordedProducts);
        console.log(anotherFetchToRecordedProducts.data.recordedProducts);
        const recordedProductFilter =
          anotherFetchToRecordedProducts.data.recordedProducts.filter(
            (recordedProduct) => recordedProduct.originalId === cartItem._id
          );
        console.log(recordedProductFilter);
        if (recordedProductFilter.length === 0) {
          const productToRecordTwo = {
            originalId: cartItem._id,
            name: cartItem.name,
            description: cartItem.description,
            richDescription: cartItem.richDescription,
            image: cartItem.image,
            imagePublicId: cartItem.imagePublicId,
            brand: cartItem.brand,
            price: cartItem.price,
            dateCreated: cartItem.dateCreated,
            createdBy: cartItem.createdBy._id,
          };
          try {
            await customFetch.post('/recorded-products', productToRecordTwo);
          } catch (error) {
            console.log(error);
          }
        }
        setIsReady(false);
      } catch (e) {
        console.log(e);
      }
    });
  };

  useEffect(() => {
    registerCartItems(cartItems);
  }, []);

  const handlePayment = async (e) => {
    e.preventDefault();
    setPaymentIsLoading(true);

    console.log(cartItems);

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

    // ---------------------------------------- skdakjdhaskj --------------------------

    try {
      const recordApiResponseInside = await customFetch.get(
        '/recorded-products'
      );
      console.log(recordApiResponseInside);
      cartItems.map((cartItem) => {
        sellerUniqueId.map((sellerId, i) => {
          if (sellerId === cartItem.createdBy._id) {
            if (sellerUniquesArray[i].seller === cartItem.createdBy._id) {
              try {
                const recordFiltering =
                  recordApiResponseInside?.data?.recordedProducts?.filter(
                    (recordedProduct) =>
                      recordedProduct.originalId === cartItem._id
                  );

                if (recordFiltering.length === 1) {
                  const sortedCart = {
                    // product: cartItem._id,
                    recordedProduct: recordFiltering[0]._id,
                    quantity: cartItem.quantity,
                  };

                  return sellerUniquesArray[i].orderedProducts.push(sortedCart);
                }
              } catch (error) {
                console.log(error);
              }
            }
          }
        });
      });
    } catch (error) {
      console.log(error);
    }

    // ---------------------------------------- skdakjdhaskj --------------------------

    if (!stripe || !elements) {
      return;
    }

    try {
      console.log(sellerUniquesArray);

      // console.log(sellerUniquesArray[0].orderedProducts.length !== 0);
      console.log(sellerUniquesArray[0]);

      console.log(sellerUniquesArray[0].orderedProducts);
      console.log(sellerUniquesArray[0].orderedProducts[0]);
      console.log(sellerUniquesArray[0].orderedProducts[0].recordedProduct);
      if (sellerUniquesArray[0].orderedProducts[0].recordedProduct) {
        const response = await customFetch.post('/orders/user/create-order', {
          orderItems: sellerUniquesArray,
        });

        const clientSecretId =
          response.data.resolvedOrder.stripePaymentIntentId;
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
                line1:
                  shippingAdress1 || e.target.elements.shippingAdress1.value,
                line2:
                  shippingAdress2 || e.target.elements.shippingAdress2.value,
              },
              phone: phoneNumber || e.target.elements.phoneNumber.value,
            },
          },
        });

        if (paymentResult.error) {
          alert(paymentResult.error);
          setPaymentIsLoading(false);
          toast.error(paymentResult.error);
        }
        if (paymentResult.paymentIntent.status === 'succeeded') {
          setPaymentIsLoading(false);
          return navigate(`/order/order-success/${successOrderId}`);
        }
      }
      // console.log(sellerUniquesArray[0].orderedProducts.length);
      // console.log(sellerUniquesArray[0].orderedProducts[0]);
      // if (sellerUniquesArray[0].orderedProducts.length !== 0) {

      // }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return error;
    }
  };
  return (
    <PageWrapper title="Make a Payment" isInsideNoTop>
      {isReady ? (
        <Spinner />
      ) : (
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
              <Button type="submit" disabled={paymentIsLoading}>
                {paymentIsLoading ? <Spinner /> : 'Submit your Payment'}
              </Button>

              {/* <SubmitBtn /> */}
            </form>
          </div>
        </Wrapper>
      )}
    </PageWrapper>
  );
};
export default Payment;
