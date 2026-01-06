

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    "pk_test_51SKOj1JPA5VwdSFuWitBMmexVBeM5XeoEs19gRi5xbLyxOuAbfBQvfjQOMCLPkhIEcTmPzU2O9cCw8WuhLSySLG400gOeC7cEK"
)

export default stripePromise