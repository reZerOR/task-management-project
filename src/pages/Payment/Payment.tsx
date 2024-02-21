import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
    
    return (
        <div>
            <h2>Payment</h2>

            <div>
                <Elements stripe={stripePromise}>
                   
                </Elements>
            </div>
            
        </div>
    );
};

export default Payment;