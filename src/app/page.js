"use client";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import CardOrder from "./components/card/card";
import CardSlider from "./components/cardSlider/cardSlider";
import BottomSlider from "./components/bottomSlider/bottomSlider";
import Jepun from "./assets/jepun.png";
import Jepang from "./assets/jepang.png";
import Image from "next/image";

export default function Landing() {

  return (
    <main className="bg-white overflow-hidden">
      <title>Ankasa Flight</title>
      <Navbar />
      <div className="test absolute left-[610px] z-10">
        <CardOrder />
      </div>
      <div className="container mb-20 mx-auto">
        <div className="box flex">
          <h1 className="font-bold text-[50px] p-32">
            Find your <span className="text-blue-400">Flight</span>
          </h1>
          <Image className="relative left-[250px]" src={Jepang} />
        </div>
        <div className="box2 relative left-[-35px]">
          <Image src={Jepun} />
        </div>
        <div className="trend text-start mt-10">
          <p className="text-blue-400 tracking-[5px]">TRENDING</p>
          <div className="subTitle flex justify-between">
            <div className="title">
              <h1 className="font-bold">Trending Destinations</h1>
            </div>
            <div className="next">
              <p className="text-[14px] text-blue-400">View All</p>
            </div>
          </div>
        </div>
        <div className="slider mt-6">
          <CardSlider />
        </div>
        <div className="sliderBottom mt-10">
          <BottomSlider />
        </div>
      </div>
      <Footer />
    </main>
  );
}
