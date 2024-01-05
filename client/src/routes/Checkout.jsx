/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Checkout';
import CheckoutItem from '../component/CheckoutItem';
// import { useDashboardContext } from './DashboardLayout';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from '@stripe/react-stripe-js';
import { SubmitBtn } from '../component';
import customFetch from '../utils/customFetch';
import Button from '../component/Button';
import { useDashboardContext } from '../contexts/dashboardContext/dashboardContext';
import BackNav from '../component/BackNav';
import PageWrapper from '../component/PageWrapper';

const Checkout = () => {
  const { sellerUniqueArray } = useDashboardContext();
  const takedPrice = sellerUniqueArray.map((sellerUnique) => {
    const singlePrice = sellerUnique.products.map((product) => {
      return product.price * product.quantity;
    });
    const calculatedPrice = singlePrice.reduce((acc, v) => acc + v, 0);
    return calculatedPrice;
  });
  const totalPrice = takedPrice.reduce((acc, v) => acc + v, 0);
  return (
    <PageWrapper title="checkout" isNoHeader>
      <Wrapper>
        {sellerUniqueArray.map((item) => (
          <CheckoutItem cartItem={item} key={item.sellerId} />
        ))}

        <div className="checkout-footer">
          {sellerUniqueArray.length === 0 ? (
            <span>You have nothing to process</span>
          ) : (
            <>
              <div className="checkout-total">
                <span className="total-text">Total </span>
                <span className="total-number">${totalPrice}</span>
              </div>
              <div className="checkout-button">
                <Button>
                  <Link to="/dashboard/checkout/payment">CHECKOUT</Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </Wrapper>
    </PageWrapper>
  );
};
export default Checkout;
