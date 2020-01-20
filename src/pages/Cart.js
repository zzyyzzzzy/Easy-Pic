import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems, emptyCart } = useContext(Context);
  const [buttonText, setButtonText] = useState("Place Order");
  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ));
  const total = cartItems.length * 5.99;

  const palceOrder = () => {
    setButtonText("Ordering...");
    setTimeout(() => {
      emptyCart();
      setButtonText("Place Order");
      console.log("Order Placed");
    }, 3000);
  };

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">
        Total:{" "}
        {total.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </p>
      <div className="order-button">
        {cartItems.length ? (
          <button onClick={palceOrder}>{buttonText}</button>
        ) : (
          <p>No Items In the Cart...</p>
        )}
      </div>
    </main>
  );
}

export default Cart;
