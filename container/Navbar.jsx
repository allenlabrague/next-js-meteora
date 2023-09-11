import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-5 py-3 fixed top-0 left-0 right-0 backdrop-blur-sm bg-white/10 z-10">
      <div>
        <h2 className="font-bold text-2xl">METEORA</h2>
      </div>
      <div>
        <HiMenuAlt3 fontSize={30} />
      </div>
    </nav>
  );
};

export default Navbar;
