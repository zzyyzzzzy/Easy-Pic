import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addToCart, cartItems } = useContext(Context);
  const heartIcon = hovered && (
    <i
      className={
        img.isFavorite ? "ri-heart-fill favorite" : "ri-heart-line favorite"
      }
      onClick={() => toggleFavorite(img.id)}
    ></i>
  );
  const cartIcon = hovered && (
    <i
      className={
        cartItems.some(item => item.id === img.id)
          ? "ri-shopping-cart-fill cart"
          : "ri-add-circle-line cart"
      }
      onClick={() => addToCart(img)}
    ></i>
  );
  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" alt="beautiful image" />
      {heartIcon}
      {cartIcon}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
};

export default Image;
