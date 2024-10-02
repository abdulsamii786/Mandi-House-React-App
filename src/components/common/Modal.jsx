import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ modal, setModal, data }) => {
  const { image, details, strike, price, title, dishes } = data;

  return (
    <>
      {modal && (
        <div className=" h-[100vh] w-full fixed top-0 z-10 flex items-center justify-center bg-[#0000004d] ">
          <div className="flex h-[400px] w-[800px] bg-white rounded-xl">
            <div className="w-[50%] h-full">
              <img
                className="object-cover w-auto h-full rounded-l-xl "
                src={image}
                alt=""
              />
            </div>
            <div className="w-[50%] relative p-2">
              <button
                className="absolute top-0 right-0 m-2 text-2xl bg-[#193b1d] text-white rounded-full p-1"
                onClick={() => setModal(false)}
              >
                <IoCloseSharp />
              </button>
              <h2 className="text-3xl font-semibold">{title}</h2>
              <div className="flex gap-5 mt-3">
                <h4 className="text-black text-xl font-semibold">
                  Rs. {price}
                </h4>
                <h4 className="text-black text-xl font-normal line-through">
                  Rs. {strike}
                </h4>
              </div>
              <p className="mt-3 text-gray-500 min-h-36">{details}</p>
              <div className="flex justify-between ">
                {dishes.map((item) => {
                  return <img className="w-[120px]" src={item.image} key={item.id} alt="" />;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
