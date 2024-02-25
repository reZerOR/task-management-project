import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckoutForm/CheckOut";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
    
    return (
        <div>
            <h2>Payment</h2>

            <div>
                <Elements stripe={stripePromise}>
                   <CheckOut></CheckOut>
                </Elements>
            </div>
            
        </div>
    );
};

export default Payment;