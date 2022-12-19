import React from "react";
import FeatureCard from "./FeatureCard";
import Bottle from "../assets/Bottle.png";
import Vaksin from "../assets/Vaksin.png";
import Vaksin2 from "../assets/Vaksin2.png";
import Location from "../assets/Location.png";
import Banner from "../assets/Mockup.png";
import Triangle from "../assets/Triangle.svg";
import Stars from "../assets/star.svg";
import Wave from "../assets/wave.svg";

const Features = () => {
  const feature = [
    {
      icon: Vaksin,
      title: "Varietas Vaksin",
      subtile: "Tersedia banyaknya jenis vaksin yang siap digunakan",
    },

    {
      icon: Bottle,
      title: "Booking Vaksin",
      subtile: "Kamu dapat melakukan booking vaksin dengan mudah",
    },
    {
      icon: Location,
      title: "Lokasi Terdekat",
      subtile: "Kamu dapat dengan mudah mencari faskes terdekat",
    },
    {
      icon: Vaksin2,
      title: "And more",
      subtile: "masih banyak fitur lainnya yang siap membantumu",
    },
  ];

  return (
    <section
      id="feature"
      className="w-full flex flex-col justify-center items-center py-40"
    >
      <h1 className="text-[28px] font-semibold">Layanan World Vaccine</h1>
      <div className="w-full relative z-0 pt-10">
        <div className="absolute flex gap-28 right-[208px]">
          <img src={Triangle} alt="segitiga" />
          <div className="w-10 h-10 rounded-full bg-[#0015D1]"></div>
        </div>
      </div>
      <div className="flex gap-14">
        <div>
          <img src={Banner} alt="banner-hp" />
        </div>
        <div className="flex flex-col gap-16">
          <div>
            <img src={Stars} alt="stars" />
          </div>
          <div className="grid grid-cols-2 gap-y-20 gap-x-6">
            {feature.map((content, index) => (
              <FeatureCard
                key={index}
                icon={content.icon}
                title={content.title}
                subtitle={content.subtile}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full relative z-0 pt-10">
        <div className="absolute flex gap-28 left-6">
          <img src={Wave} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Features;
