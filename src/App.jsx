import React from "react";
import Home from "./pages/Home";
import { bannerImgs } from "./utils/constant/bannerImages";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url("${bannerImgs.bgImg}")`,
      }}
    >
      <Home />
    </div>
  );
};

export default App;
