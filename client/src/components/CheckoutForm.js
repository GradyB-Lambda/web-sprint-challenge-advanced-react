import React, { useState } from "react";
import useForm from '../hooks/useForm'

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [valuesAtCheckout, handleChanges] = useState(initialValue);
    // const [values, setValues] = useState(initialValue);

    // const handleChanges = (e) => {
    //   setValues({ ...values, [e.target.name]: e.target.value });
    // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={valuesAtCheckout.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={valuesAtCheckout.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={valuesAtCheckout.address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={valuesAtCheckout.city} onChange={handleChanges} />
        </label>
        <label>
          State:
          <input name="state" value={valuesAtCheckout.state} onChange={handleChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={valuesAtCheckout.zip} onChange={handleChanges} />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {valuesAtCheckout.firstName} {valuesAtCheckout.lastName}
          </p>
          <p>{valuesAtCheckout.address}</p>
          <p>
            {valuesAtCheckout.city}, {valuesAtCheckout.state} {valuesAtCheckout.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
