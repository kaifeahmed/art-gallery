import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SingleArt from './SingleArt';

const stripePromise = loadStripe('pk_test_51PK8GOADaBtYLeCSIVkGbdzK7kKnwv6wRfKlP8K001EHRqYjjOAvjq4ncDm4v4YxzXJWOUPxMxxuPRB9P8JtwZIv00EIbb8DbY');

export default function PaymentFormParent() {

  return (
    <Elements stripe={stripePromise}>
        <SingleArt/>
    </Elements>
  );
}
