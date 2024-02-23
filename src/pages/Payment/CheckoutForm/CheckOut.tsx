import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosPrivate from "../../../Hooks/AxiosPrivate/useAxiosPrivate";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import {Spinner} from "@nextui-org/react";

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();

    const axiosSecure = useAxiosPrivate();
    const { user } = useContext(AuthContext);
    const [err, setErr] = useState<string>("");
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState('');
    const [loading, setLoading] = useState(false);
    const {packagePrice}= useContext(AuthContext);
    console.log(packagePrice);
    // const price = packageInfo?.package?.split(" ")[3].split("$")[1];
    // const [loading, setLoading] = useState(false);

    // const [packageExists, refetch] = usePackageExists();

    useEffect(() => {
        if (packagePrice > 0) {
            axiosSecure.post("/create-payment-intent", { price: packagePrice })
                .then(res => {
                    console.log(res.data);
                    setClientSecret(res.data.clientSecret);
                })

        }

    }, [axiosSecure, packagePrice])
    // console.log(clientSecret)

    const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setErr("");
        setTransactionId('');
        setLoading(true);

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

        const { paymentIntent, error: paymentConfirmError } = await stripe.confirmCardPayment(clientSecret, {

            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || "Anonymous",
                    email: user?.email || "Anonymous",
                }
            }
        })

        if (paymentConfirmError) {
            setLoading(false);
            console.log("payment confirm error", paymentConfirmError);

            setErr(paymentConfirmError.message || "");
        }
        else {
            console.log("payment Confirm Success", paymentIntent);

            if (paymentIntent.status == "succeeded") {
                setTransactionId(paymentIntent.id);

                // const result = await axiosSecure.patch(`/addPackage/${user?.email}`, packageInfo)

                // if (result.data.modifiedCount > 0) {
                //     refetch();

                //     setLoading(false);



                //     Swal.fire({
                //         icon: "success",
                //         title: "Successful",
                //         text: "Successfully Bought Package",

                //     });
                // }

            }
        }
  

    }
    return (
        <div>
            <div className="mt-8">
                <form onSubmit={handleSubmit} >

                    {
                        loading && <div className="text-center"><Spinner /></div>
                    }
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
                            <button className=" btn bg-green-400 text-white" type="submit" disabled={!stripe || !clientSecret}>
                                Pay
                            </button>
                        </div>



                    </div>
                    <div className="text-center text-red-600">
                        <h2>{err}</h2>
                    </div>

                    {
                        transactionId && (
                            <div className="text-center" >
                                <h2> Your Transaction Id: <span className=" text-green-600"> {transactionId}</span> </h2>
                            </div>
                        )
                    }



                </form>
            </div>
        </div>
    );
};

export default CheckOut;