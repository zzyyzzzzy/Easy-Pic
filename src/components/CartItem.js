import React, { useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);
  const [hovered, ref] = useHover();

  return (
    <div className="cart-item">
      <i
        className={hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"}
        ref={ref}
        onClick={() => removeFromCart(item.id)}
      ></i>
      <img src={item.urls.thumb} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

// CartItem.propTypes = {
//   item: PropTypes.shape({
//     url: PropTypes.string.isRequired
//   })
// };
export default CartItem;
