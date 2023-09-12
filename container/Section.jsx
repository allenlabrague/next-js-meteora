import { secondPlanet } from "@/constants";
import DetailsList from "@/components/DetailsList";
import dynamic from "next/dynamic";

const Earth = dynamic(() => import("@/components/Earth"), {
  ssr: false,
  loading: () => <img src="/pl1.png"></img>,
});

const Section = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen pt-24">
      <h1 className="text-3xl text-center font-medium mb-8 tracking-[1rem]">
        ETHERON
      </h1>
      <DetailsList list={secondPlanet} />
      <Earth
        image={"/planet1.jpg"}
        position={["end start", "start end"]}
        direction={[-1, -0.4, 0.7]}
      />
    </section>
  );
};

export default Section;
