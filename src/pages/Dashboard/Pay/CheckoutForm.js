import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState('');
  const [message, setMessage] = useState(null);
  const [style, setStyle] = useState({});
  const [isLoading, setIsLoading] = useState(1);
  const price = 500;
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(isLoading + 1);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: 'john',
            email: 'mon@gmail.com',
          },
        },
      });

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      setStyle({
        color: 'red',
      });
      setMessage(error.message);
    } else {
      setStyle({
        color: 'green',
      });
      setMessage('payment is successfull');
    }
  };

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
    // stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
    //   switch (paymentIntent.status) {
    //     case 'succeeded':
    //       setMessage('Payment succeeded!');
    //       break;
    //     case 'processing':
    //       setMessage('Your payment is processing.');
    //       break;
    //     case 'requires_payment_method':
    //       setMessage('Your payment was not successful, please try again.');
    //       break;
    //     default:
    //       setMessage('Something went wrong.');
    //       break;
    //   }
    // });
  }, [isLoading]);

  // sslcommrerz

  const purchase = () => {
    const info = {
      product_name: 'bmw gtr 10',
      total_amount: 50000,
      cus_name: 'toyota company limited',
      cus_email: 'naharaspark@gmail.com',
    };
    fetch(`http://localhost:5000/init`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.replace(data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '20px',
                color: '#000',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          type="submit"
          className="bg-green-600 text-white p-1 rounded-xl"
          disabled={!stripe}
        >
          Pay $500
        </button>
        {
          <h2 style={style} className="mt-10 text-xl ">
            {message}
          </h2>
        }
      </form>

      {/* sslcommerz */}

      <main
        style={{ height: '600px' }}
        className="row d-flex align-items-center w-100"
      >
        <div className="col-md-12 col-lg-4 offset-md-1 mb-4 fw-bolder text-dark">
          <p>Plan your trip now</p>
          <h1 style={{ color: '#ff4d30' }}>Bmw gtr 10</h1>
          <p className="text-secondary">
            {' '}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
            vitae sint impedit ratione asperiores laborum. Velit{' '}
          </p>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            perferendis fuga officia dicta, voluptatem provident!
          </p>
          <button
            style={{
              backgroundImage:
                'linear-gradient(to left,#f0561d,#fff,#ff6830,#f0561d)',
            }}
            className="btn btn-lg fw-bolder"
            onClick={purchase}
          >
            Book Ride
          </button>
        </div>
        <div className="col-md-12 col-lg-6">
          <img src="" alt="" className="img-fluid w-100" />
        </div>
      </main>
    </div>
  );
};

export default CheckoutForm;
