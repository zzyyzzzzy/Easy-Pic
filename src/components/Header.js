import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../Context";

function Header() {
  const { cartItems, searchImages } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();
  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";
  function handleOnSubmit(event) {
    event.preventDefault();
    searchImages(searchTerm);
    history.push("/");
  }

  function handleOnChange(event) {
    const { value } = event.target;
    setSearchTerm(value);
  }
  return (
    <header>
      <h2>
        <Link to="/">Easy Pic</Link>
      </h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="searchTerm"
          onChange={handleOnChange}
          value={searchTerm}
        />
        <button type="submit" className="searchButton">
          <i className="ri-search-line"></i>
        </button>
      </form>
      <Link to="/cart">
        <i className={`${cartClassName} ri-fw ri-2x`}></i>
      </Link>
    </header>
  );
}

export default Header;
