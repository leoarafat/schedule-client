import React, { useContext, useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { AuthContext } from "../../../components/Contexts/AuthProvider/AuthProvider";

const CheckoutForm = ({ membership }: any) => {
  const { user }: any = useContext(AuthContext);
  const [userInfo, setData] = useState([]);
  console.log(userInfo);
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(`http://localhost:5000/user?email=${user?.email}`)
      ).json();
      setData(data);
    };

    dataFetch();
  }, [user?.email]);

  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [owner, setOwner] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { cost, status } = membership;

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
    setSuccess("");
    setProcessing(true);

    const { paymentIntent, error: confirmError }: any =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status == "succeeded") {
      setSuccess("Congrats! your payment completed");
      setTransactionId(paymentIntent.id);
    }
    console.log("paymentIntent", paymentIntent);
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
            disabled={!stripe || !clientSecret || processing}
            className="btn btn-primary w-48 my-5"
          >
            Pay
          </button>
        </div>
      </form>
      <p className="text-red-500">{cardError}</p>
      {success && (
        <div>
          <div className="bg-white p-6  md:mx-auto">
            <div className="text-center">
              <svg
                viewBox="0 0 24 24"
                className="text-green-600 w-16 h-16 mx-auto my-6"
              >
                <path
                  fill="currentColor"
                  d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                ></path>
              </svg>
              <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                Payment Done!
              </h3>
              <p className="text-gray-600 my-2">
                Thank you for completing your secure online payment.
              </p>
              <p> Have a great day! </p>
            </div>
          </div>
          <div></div>

          {userInfo?.map((usr: any) => {
            const {
              currentAddress,
              permanentAddress,
              contactNumber,
              image,
              name,
            } = usr;
            return (
              <div>
                <div className="flex">
                  <div className="w-1/2">
                    <img className="h-auto w-full mx-auto" src={image} alt="" />
                  </div>
                  <div className="w-1/2">
                    Name : {name}
                    Email : {user.email}
                    Contact No : {contactNumber}
                    Current Address : {currentAddress}
                    Permanent Address : {permanentAddress}
                    Status : {status}
                    Amount : {cost}
                    transactionId : {transactionId}
                  </div>
                </div>

                <div className="py-10 text-center">
                  <a
                    href="/"
                    className="px-12 bg-primary hover:bg-indigo-500 text-white font-semibold py-3"
                  >
                    GO BACK
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
