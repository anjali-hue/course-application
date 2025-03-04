import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51QxLJTJqwvltbjGNXVnp312CyZUTBES0b0RJWftmkrGJ2hFSwlaVn1nKHctOlnjvQItIfle9G6jaqqMUvEvxH5It00sda34mMq"
);

createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </Elements>
);