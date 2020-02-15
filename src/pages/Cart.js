import React, { useContext, useState } from "react";
import multiDownload from "multi-download";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems, emptyCart } = useContext(Context);
  const [buttonText, setButtonText] = useState("Download All");

  let r = [];
  for (let i = 0; i < cartItems.length; i++) {
    r.push(React.createRef());
  }
  const cartItemElements = cartItems.map((item, index) => (
    <CartItem key={item.id} item={item} />
  ));
  const cartItemUrl = cartItems.map(
    item => `${item.links.download}?force=true`
  );
  console.log(cartItemUrl);
  const downloadAllImg = () => {
    setButtonText("Downloading...");
    setTimeout(() => {
      multiDownload(cartItemUrl);
      emptyCart();
      setButtonText("Download All");
      console.log("Order Placed");
    }, 2000);
  };

  return (
    <main className="cart-page">
      <h1>Picture Cart</h1>
      {cartItemElements}

      <div className="order-button">
        {cartItems.length ? (
          <button onClick={downloadAllImg}>{buttonText}</button>
        ) : (
          <p>No Items In the Cart...</p>
        )}
      </div>
    </main>
  );
}

export default Cart;
