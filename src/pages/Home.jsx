import { useState } from "react";
import Card from "../components/common/Card";
import ImageBanner from "../components/common/ImageBanner";
import Modal from "../components/common/Modal";
import { bannerImgs } from "../utils/constant/bannerImages";
import { popularItem } from "../utils/constant/cardData";

const Home = () => {
  const findId = (id) => {
    const filteredData = popularItem.find((item) => item.id == id);
    setIsModal(true);
    setIsFilter(filteredData);
  };
  const [isfilter, setIsFilter] = useState(popularItem[0]);
  const [isModal, setIsModal] = useState(false);
  return (
    <div>
      <ImageBanner src={bannerImgs.image1} />
      <div className="container mx-auto flex flex-wrap justify-between px-[200px] max-sm:px-6 max-sm:justify-center">
        {popularItem.map((item) => {
          return (
            <div key={item.id} onClick={() => findId(item.id)}>
              <Card data={item} />
            </div>
          );
        })}
      </div>
      <ImageBanner src={bannerImgs.image2} />
      <div className="container mx-auto flex flex-wrap justify-between px-[200px] max-sm:px-6 max-sm:justify-center">
        {popularItem.map((item) => {
          return (
            <div key={item.id} onClick={() => findId(item.id)}>
              <Card data={item} />
            </div>
          );
        })}
      </div>
      <ImageBanner src={bannerImgs.image3} />
      <div className="container mx-auto flex flex-wrap justify-between px-[200px] max-sm:px-6 max-sm:justify-center">
        {popularItem.map((item) => {
          return (
            <div key={item.id} onClick={() => findId(item.id)}>
              <Card data={item} />
            </div>
          );
        })}
      </div>
      <ImageBanner src={bannerImgs.image4} />
      <div className="container mx-auto flex flex-wrap justify-between px-[200px] max-sm:px-6 max-sm:justify-center">
        {popularItem.map((item) => {
          return (
            <div key={item.id} onClick={() => findId(item.id)}>
              <Card data={item} />
            </div>
          );
        })}
      </div>
      <ImageBanner src={bannerImgs.image5} />
      <div className="container mx-auto flex flex-wrap justify-between px-[200px] max-sm:px-6 max-sm:justify-center">
        {popularItem.map((item) => {
          return (
            <div key={item.id} onClick={() => findId(item.id)}>
              <Card data={item} />
            </div>
          );
        })}
      </div>
      <ImageBanner src={bannerImgs.image6} />
      <div className="container mx-auto flex flex-wrap justify-between px-[200px] max-sm:px-6 max-sm:justify-center">
        {popularItem.map((item) => {
          return (
            <div key={item.id} onClick={() => findId(item.id)}>
              <Card data={item} />
            </div>
          );
        })}
      </div>
      <Modal modal={isModal} setModal={setIsModal} data={isfilter} />
    </div>
  );
};

export default Home;
