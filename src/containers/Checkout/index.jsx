import { Elements } from "@stripe/react-stripe-js"
import { useLocation } from "react-router-dom"
import stripePromise from "../../config/stripeConfig.js"
import CheckoutForm from "../../components/Stripe/CheckoutForm/index.jsx"


export function Checkout() {
    const { state: { clientSecret } } = useLocation()


    if (!clientSecret) {
        return (
            <h3>Volte ao carrinho e tente novamente</h3>
        )
    }

    return (
        <Elements
            stripe={stripePromise}
            options={{ clientSecret }}
        >
            <CheckoutForm />
        </Elements>
    )
}