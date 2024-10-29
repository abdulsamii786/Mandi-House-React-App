import React from "react";

const ImageBanner = ({ src }) => {
  return (
    <div className="container mx-auto rounded-xl py-6 px-36 max-sm:px-2">
      <img src={src} className="object-contain w-full h-full rounded-xl" />
    </div>
  );
};

export default ImageBanner;
