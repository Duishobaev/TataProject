import React from "react";
import Hero from "./hero/Hero";
import "./Home.css";
import SectionFifth from "./sectionFifth/SectionFifth";
import SectionFirst from "./sectionFirst/SectionFirst";
import SectionFourth from "./sectionFourth/SectionFourth";
import SectionSecond from "./sectionSecond/SectionSecond";
import SectionSeven from "./sectionSeven/SectionSeven";
import SectionSix from "./sectionSix/SectionSix";
import SectionThird from "./sectionThird/SectionThird";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <SectionFirst />
      <SectionSecond />
      <SectionThird />
      <SectionFourth />
      <SectionFifth />
      <SectionSix />
      <SectionSeven />
    </div>
  );
};

export default Home;
