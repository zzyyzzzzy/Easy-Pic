import React from "react";

function Image({ className, img }) {
  return (
    <div className={`${className} image-container`}>
      <img src={img.url} className="image-grid" alt="beautiful image" />
    </div>
  );
}

export default Image;
