import React, { useContext } from "react";
import Image from "../components/Image";
import { getClass } from "../utils";
import { Context } from "../Context";

function Photos() {
  const { allPhotos } = useContext(Context);
  const noResults = (
    <h2 style={{ textAlign: "center" }}>There are no images to display....</h2>
  );
  const photoList = allPhotos.map((photo, i) => (
    <Image key={photo.id} img={photo} className={getClass(i)} />
  ));

  return (
    <main className="photos">
      {photoList.length === 0 ? noResults : photoList}
    </main>
  );
}

export default Photos;
