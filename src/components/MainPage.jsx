import React from "react";
import HorizontalCards from "./HorizontalCards";
import MainContent from "./MainContent";

const MainPage = () => {
  return (
    <div>
      <MainContent />
      <HorizontalCards Title={"Our Favourite"} slice={true} />
    </div>
  );
};

export default MainPage;
