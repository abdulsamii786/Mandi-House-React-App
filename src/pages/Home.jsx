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
      <div className="w-[80%] mx-auto flex gap-16 justify-center">
        {popularItem.map((item) => {
          return (
            <div key={item.id} onClick={() => findId(item.id)}>
              <Card data={item} />
            </div>
          );
        })}
      </div>
      <ImageBanner src={bannerImgs.image2} />
      <ImageBanner src={bannerImgs.image3} />
      <ImageBanner src={bannerImgs.image4} />
      <ImageBanner src={bannerImgs.image5} />
      <ImageBanner src={bannerImgs.image6} />
      <Modal modal={isModal} setModal={setIsModal} data={isfilter} />
    </div>
  );
};

export default Home;
