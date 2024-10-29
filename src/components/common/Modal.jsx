import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ modal, setModal, data }) => {
  const [selectedImgData, setSelectedImgData] = useState(data);
  const { image, details, strike, price, title } = selectedImgData;

  const productGallery = (id) => {
    const findItem = data.dishes.find((item) => item.id == id);
    console.log(findItem);
    setSelectedImgData(findItem);
  };

  useEffect(() => setSelectedImgData(data), [data]);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [modal]);

  return (
    <>
      {modal && (
        <div className=" h-[100vh] w-full fixed top-0 z-10 flex items-center justify-center bg-[#0000004d] overflow-hidden p-3">
          <div className="flex flex-wrap h-[400px] max-sm:h-[80vh] w-[50%] max-sm:w-full bg-white rounded-xl relative">
            <button
              className="absolute -top-5 -right-5 m-2 text-2xl bg-[#193b1d] text-white rounded-full p-1"
              onClick={() => setModal(false)}
            >
              <IoCloseSharp />
            </button>
            <div className="w-[50%] h-full max-sm:w-full max-sm:h-[250px] ">
              <img
                className="object-cover w-full h-full  "
                src={image}
                alt=""
              />
            </div>
            <div className="w-[50%] max-sm:w-full p-2">
              <h2 className="text-3xl font-semibold max-sm:text-2xl">{title}</h2>
              <div className="flex gap-5 mt-3 max-sm:mt-0">
                <h4 className="text-black text-xl font-semibold">
                  Rs. {price}
                </h4>
                <h4 className="text-black text-xl font-normal line-through">
                  Rs. {strike}
                </h4>
              </div>
              <p className=" text-gray-500 min-h-20 max-sm:text-sm">{details}</p>
              <div className="w-full flex justify-between py-2">
                {data.dishes.map((item) => {
                  return (
                    <img
                      onClick={() => productGallery(item.id)}
                      className="w-[120px] cursor-pointer rounded-md hover:-translate-y-2 transition-all duration-[400ms] max-sm:w-[100px]"
                      src={item.image}
                      key={item.id}
                      alt=""
                    />
                  );
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
