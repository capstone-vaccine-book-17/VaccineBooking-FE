import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="w-screen flex flex-col justify-center items-center">
      <div className="text-6xl">Features</div>
      <FeatureCard title="Features 1" />
      <FeatureCard title="Features 2" />
      <FeatureCard title="Features 3" />
    </section>
  );
};

export default Features;
