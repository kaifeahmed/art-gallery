import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SingleCourse from './SingleCourse';

const stripePromise = loadStripe('pk_test_51PK8GOADaBtYLeCSIVkGbdzK7kKnwv6wRfKlP8K001EHRqYjjOAvjq4ncDm4v4YxzXJWOUPxMxxuPRB9P8JtwZIv00EIbb8DbY');

export default function PaymentFormParentSingleCourse() {

  return (
    <Elements stripe={stripePromise}>
        <SingleCourse/>
    </Elements>
  );
}
