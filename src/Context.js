import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

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
  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addToCart,
        cartItems,
        removeFromCart
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
