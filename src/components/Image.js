import React, { useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function Image({ className, img }) {
  const [hovered, ref] = useHover();
  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(
    Context
  );

  const renderHeartIcon = () => {
    if (hovered) {
      return (
        <i
          className={
            img.isFavorite ? "ri-heart-fill favorite" : "ri-heart-line favorite"
          }
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (img.isFavorite) {
      return (
        <i
          className={"ri-heart-fill favorite"}
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  };

  const isInCart = cartItems.some(item => item.id === img.id);
  const cartIcon = hovered && (
    <i
      className={
        isInCart ? "ri-shopping-cart-fill cart" : "ri-add-circle-line cart"
      }
      onClick={isInCart ? () => removeFromCart(img.id) : () => addToCart(img)}
    ></i>
  );
  const downloadIcon = hovered && (
    <a href={`${img.links.download}?force=true`} download>
      <i className="ri-download-line download"></i>
    </a>
  );

  return (
    <div className={`${className} image-container`} ref={ref}>
      <img src={img.urls.small} className="image-grid" alt="beautiful image" />
      {renderHeartIcon()}
      {cartIcon}

      {downloadIcon}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired
  })
};

export default Image;
