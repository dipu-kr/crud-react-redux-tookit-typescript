import { BiUserCircle } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="w-full h-[70px] bg-slate-600 flex justify-between items-center px-10">
      <h2 className="text-xl font-bold text-white">CRUD-APP</h2>
      <span className="text-[35px] text-white">
        <BiUserCircle />
      </span>
    </div>
  );
};

export default Navbar;
