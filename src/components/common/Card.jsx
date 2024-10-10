import React from "react";

const Card = ({ data }) => {
  const { details, strike, price, title, image, id } = data;
  return (
    <div className="h-[300px] w-[300px] rounded-md relative p-2 cursor-pointer hover:-translate-y-2 transition-all duration-[400ms]">
      <div
        className="w-full h-full absolute top-0 left-0 rounded-md"
        style={{
          backgroundImage: `url("${image}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="absolute bottom-1 ">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="text-white text-sm font-medium">from</p>
        <div className="flex gap-5">
          <h4 className="text-white text-xl font-semibold">Rs. {price} </h4>
          <h4 className="text-white text-xl font-normal line-through">
            Rs. {strike}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
