import React, { useContext, useState, useRef } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems, emptyCart } = useContext(Context);
  const [buttonText, setButtonText] = useState("Download All");
  const [downloadAll, setDownloadAll] = useState(false);
  let r = [];
  for (let i = 0; i < cartItems.length; i++) {
    r.push(React.createRef());
  }
  const refs = useRef(r);
  const cartItemElements = cartItems.map((item, index) => (
    <CartItem
      key={item.id}
      item={item}
      downloadRefs={refs}
      i={index}
      downloadAll={downloadAll}
    />
  ));
  const atags = [];
  const cartItemUrl = cartItems.map(
    item => `${item.links.download}?force=true`
  );
  for (let i = 0; i < cartItemUrl.length; i++) {
    let a = document.createElement("a");
    a.href = cartItemUrl[i];
    a.download = "picture";
    atags.push(a);
  }
  console.log(cartItemUrl);
  const downloadAllImg = e => {
    e.preventDefault();
    atags[0].click();
    atags[1].click();
    setButtonText("Downloading...");
    setDownloadAll(true);
    setTimeout(() => {
      emptyCart();
      setButtonText("Download All");
      console.log("Order Placed");
    }, 2000);
  };

  return (
    <main className="cart-page">
      <h1>Check out</h1>
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
