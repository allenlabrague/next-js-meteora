import { firstPlanet } from "@/constants";
import DetailsList from "@/components/DetailsList";
import dynamic from "next/dynamic";

const Earth = dynamic(() => import("@/components/Earth"), {
  ssr: false,
  loading: () => <img src="/placeholder.png"></img>,
});

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full h-screen pt-24">
      <h1 className="text-3xl text-center font-medium mb-8 tracking-[1rem]">
        LUMENARA
      </h1>
      <DetailsList list={firstPlanet} />
      <Earth
        image={"/planet.jpg"}
        position={["start end", "end start"]}
        direction={[1, 0.4, 0.7]}
      />
    </header>
  );
};

export default Header;
