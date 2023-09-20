import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[70px] bg-slate-600 flex justify-between items-center px-10">
      <div className="flex gap-20">
        <h2 className="text-xl font-bold text-white">CRUD-APP</h2>
        <button
          onClick={() => navigate("/add")}
          className="border py-1 px-4 rounded-md text-white cursor-pointer hover:bg-slate-400 hover:transition-all hover:duration-300 ease-in-out"
        >
          Add User
        </button>
      </div>

      <span className="text-[35px] text-white">
        <BiUserCircle />
      </span>
    </div>
  );
};

export default Navbar;
