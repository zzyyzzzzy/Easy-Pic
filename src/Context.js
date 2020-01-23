import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const API_KEY = process.env.REACT_APP_EASY_PIC_API_KEY;
  const url = "https://api.unsplash.com/photos?client_id=" + API_KEY;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAllPhotos(data));
  }, []);

  const toggleFavorite = id => {
    const newPhotos = allPhotos.map(img => {
      if (img.id === id) {
        return {
          ...img,
          isFavorite: !img.isFavorite
        };
      }
      return img;
    });

    setAllPhotos(newPhotos);
  };
  const addToCart = img => setCartItems(prevItems => [...prevItems, img]);

  const removeFromCart = id =>
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));

  const emptyCart = () => {
    setCartItems([]);
  };
  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addToCart,
        cartItems,
        removeFromCart,
        emptyCart
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
