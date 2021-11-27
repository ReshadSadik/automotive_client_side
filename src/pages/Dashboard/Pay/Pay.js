import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51JxAKACwIUwhQp2UiiswDsGGgIc3TQi8wQTn9U52eg0pnmSAKfemhiKOVhTqN4OGCC6ZipLMbBT8xTML0XPmMbmY00LUXcIsE5'
);
const Pay = () => {
  return (
    <div className="mx-56 mt-40">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Pay;
