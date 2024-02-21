import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosPrivate from "../../../Hooks/AxiosPrivate/useAxiosPrivate";

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();

    const axiosSecure = useAxiosPrivate();

    const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            // console.log('failed. error', error);
            // setErr(error.message);
        }
        else {
            console.log('payment successful', paymentMethod);
        }


  

    }
    return (
        <div>
            <div className="mt-8">
                <form onSubmit={handleSubmit} >

                    {/* {
                        loading && <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
                    } */}
                    <div className="md:w-[600px] bg-slate-100 mx-auto h-[200px] grid items-center space-y-4   md:px-14">
                        <CardElement className=" "
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                            backgroundColor: "white",


                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }}
                        />

                        <div className="text-center">
                            {/* <button className=" btn bg-green-400 text-white" type="submit" disabled={!stripe || !clientSecret}>
                                Pay
                            </button> */}
                        </div>



                    </div>
                    <div className="text-center text-red-600">
                        {/* <h2>{err}</h2> */}
                    </div>

                    {/* {
                        transactionId && (
                            <div className="text-center" >
                                <h2> Your Transaction Id: <span className=" text-green-600"> {transactionId}</span> </h2>
                            </div>
                        )
                    } */}



                </form>
            </div>
        </div>
    );
};

export default CheckOut;