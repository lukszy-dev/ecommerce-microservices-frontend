import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm/CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51KSffVJFzUzA4eL9jHgfTY9WJNRioeeKi2k8iD2F1o5PjG4VbOTfYFg0cpQOWAAXuYsr8IcM9kxNO5kBWU2T56Db00qbpJhxpP'
);

export default function PaymentPage({ data }) {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('api/payment/init', {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.token));
  }, []);

  const options = {
    clientSecret,
    appearence: {
      theme: 'flat',
    },
  };

  return (
    <>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`${process.env.HOST}/order/cart`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }
