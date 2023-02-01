import React, { useContext, useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { AuthContext } from "../../../components/Contexts/AuthProvider/AuthProvider";

const CheckoutForm = ({ membership }: any) => {
    const { user }: any = useContext(AuthContext);

  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { cost } = membership;
  

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cost }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [cost]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod }: any = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    const {paymentIntent, error: confirmError}:any = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user.displayName,
              email: user.email
            },
          },
        },
      );
      if(confirmError){
        setCardError(confirmError.message);
        return;
      }
      console.log('paymentIntent',paymentIntent);
      
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={!stripe || !clientSecret}
            className="btn btn-primary w-48 my-5"
          >
            Pay
          </button>
        </div>
      </form>
      <p className="text-red-500">{cardError}</p>
    </>
  );
};

export default CheckoutForm;
