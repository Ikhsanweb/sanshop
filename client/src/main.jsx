import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import { ToastContainer } from 'react-toastify';
import { Toaster } from 'sonner';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
      <Toaster
        position="top-center"
        richColors
        closeButton
        duration={2000}
        style={{ marginTop: '4rem' }}
      />
    </Elements>
  </React.StrictMode>
);
