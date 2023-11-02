import Image from "next/image";
import React from "react";

import heroImg from "@/public/images/hero.png";
import HowTo from "./HowTo";

interface HeroProps {
  scrollIntoViewOnClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollIntoViewOnClick }) => {
  return (
    <div className="w-full">
      <div className="relative">
        <Image src={heroImg} alt="hero" className="px-2" />
        <div className=" w-full " onClick={scrollIntoViewOnClick}>
          <HowTo />
        </div>
      </div>
    </div>
  );
};

export default Hero;
