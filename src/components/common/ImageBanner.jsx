import React from "react";

const ImageBanner = ({ src }) => {
  return (
    <div className="">
      <img src={src} className="object-cover w-full h-56" />
    </div>
  );
};

export default ImageBanner;
