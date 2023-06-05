import {FC} from "react";
import {useAppSelector} from "@/store/hooks/redux";
import {Elements, PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";

const stripePromise =loadStripe(process.env.STRIPE_PUBLIC_KEY)

const PaymentPage = () => {

    const clientSecret = useAppSelector((state)=>state.order.clientSecret)
    //asds

    return (
        <div className={"min-h-screen bg-white-bg w-full"}>
            <main>
                <article>
                    <Elements stripe={stripePromise} options={{clientSecret:clientSecret}}>
                        <CheckoutForm />
                    </Elements>
                </article>
            </main>
        </div>
    )
}

const CheckoutForm:FC = () => {
    const clientSecret = useAppSelector((state) => state.order.clientSecret)
    const stripe = useStripe()
    const elements = useElements()

    async function handleSubmit(e) {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const {error} = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/'
            }
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement/>
            <button disabled={!stripe}>Submit</button>
        </form>
    )
}

export default PaymentPage