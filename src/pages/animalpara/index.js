import React from "react";
import "../../components/styles/icon.css"
import HomeSection1 from "../../components/animalpara/Home1Carousel";
import HomeSection2 from "../../components/animalpara/Home2Vote";
import HomeSection3 from "../../components/animalpara/Home3Video";
import SalesProduct from "../../components/animalpara/Home4sales";

const IndexPage = () => {

  return (
    <>
        <div class="bg-primary bg-opacity-50 pb-5">
          <HomeSection1 />
        </div>
        <div class="bg-success bg-gradient bg-opacity-50">
          <HomeSection2 />
        </div>

        <div class="p-3 bg-warning bg-opacity-50">
          <HomeSection3 />
        </div>
        <div className="bg-info bg-opacity-50 pb-5">
          <SalesProduct />
        </div>
    </>
  )
}

export default IndexPage;