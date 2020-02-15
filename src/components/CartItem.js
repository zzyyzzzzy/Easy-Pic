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
      <a
        ref={downloadRefs.current[i]}
        href={`${item.links.download}?force=true`}
        download
      >
        <i className="ri-download-2-line ri-xl cart-download"></i>
      </a>
    </div>
  );
}

// CartItem.propTypes = {
//   item: PropTypes.shape({
//     url: PropTypes.string.isRequired
//   })
// };
export default CartItem;
