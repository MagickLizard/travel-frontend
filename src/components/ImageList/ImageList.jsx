import React from "react";
import "./imageList.css";
import ImageCard from "../ImageCard/ImageCard";
const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return (
    <div className="container">
      <div className="image-list wrapper">
        {images}
        </div>
    </div>
  );
};

export default ImageList;
