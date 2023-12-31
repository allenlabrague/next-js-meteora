import { fourthPlanet } from "@/constants";
import DetailsList from "@/components/DetailsList";
import dynamic from "next/dynamic";

const Earth = dynamic(() => import("@/components/Earth"), {
  ssr: false,
  loading: () => <img src="/pl3.png"></img>,
});

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen pt-24">
      <h1 className="text-3xl text-center font-medium mb-8 tracking-[1rem]">
        ORIONIS
      </h1>
      <DetailsList list={fourthPlanet} />
      <Earth
        image={"/planet3.jpg"}
        position={["end start", "start end"]}
        direction={[0.2, 0, 0.25]}
      />
    </div>
  );
};

export default Footer;
