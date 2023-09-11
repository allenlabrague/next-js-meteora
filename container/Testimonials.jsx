import Earth from "@/components/Earth";
import { thirdPlanet } from "@/constants";
import DetailsList from "@/components/DetailsList";
import React from "react";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen pt-24">
      <h1 className="text-3xl text-center font-medium mb-8 tracking-[1rem]">
        THERONIX
      </h1>
      <DetailsList list={thirdPlanet} />
      <Earth
        image={"/planet2.png"}
        position={["start end", "end start"]}
        direction={[-1, 0.4, 0.7]}
      />
    </div>
  );
};

export default Testimonials;
