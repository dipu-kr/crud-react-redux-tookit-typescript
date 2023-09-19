import { BsArrowLeftSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-[calc(100vh-70px)] pt-8">
      <div className="pl-10">
        <span onClick={() => navigate("/")}>
          <BsArrowLeftSquare className="text-[30px] cursor-pointer text-purple-400 hover:transition-all hover:scale-110 hover:duration-200 hover:ease-in-out " />
        </span>
      </div>
      <div className="w-1/3 h-auto border m-auto  shadow-md rounded-md p-5">
        <h3 className="text-[21px] font-semibold text-center underline mb-10">
          Update User Data
        </h3>
        <div className="w-11/12 grid grid-cols-1 gap-5 m-auto">
          <input
            type="text"
            placeholder="Name..."
            className="w-full border rounded-md h-[38px] pl-4 outline-none text-sm"
          />
          <input
            type="text"
            placeholder="Email..."
            className="w-full border rounded-md h-[38px] pl-4 outline-none text-sm"
          />
          <input
            type="text"
            placeholder="Phone..."
            className="w-full border rounded-md h-[38px] pl-4 outline-none text-sm"
          />
          <input
            type="text"
            placeholder="Address..."
            className="w-full border rounded-md h-[38px] pl-4 outline-none mb-4 text-sm"
          />
          <button className="w-[120px] py-2 border shadow-md rounded-md uppercase bg-green-500 m-auto text-center font-medium">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
