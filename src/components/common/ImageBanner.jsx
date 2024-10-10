import React from "react";

const ImageBanner = ({ src }) => {
  return (
    <div className="w-[80%] mx-auto rounded-xl py-6">
      <img src={src} className="object-cover w-full h-56 rounded-xl" />
    </div>
  );
};

export default ImageBanner;
