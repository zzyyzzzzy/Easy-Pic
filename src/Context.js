import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAllPhotos(data));
  }, []);

  function toggleFavorite(id) {
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
  }
  return (
    <Context.Provider value={{ allPhotos, toggleFavorite }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
