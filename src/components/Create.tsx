import { useState } from "react";
import { BsArrowLeftSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { createUser } from "../features/user/createUserSlice";
import { useAppDispatch } from "../redux/hooks";
import toast, { Toaster } from "react-hot-toast";

// type RequestStatus = "fulfilled" | "pending" | "rejected";

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handleAddUser = async () => {
    if (
      name.trim() === "" &&
      email.trim() === "" &&
      phone.trim() === "" &&
      address.trim() === ""
    ) {
      toast.error("All fields are required");
    } else {
      const action = dispatch(createUser({ name, email, phone, address }));
      try {
        const result = await action;
        if (result.meta?.requestStatus === "fulfilled") {
          toast.success("User created successfully");
          setName("");
          setEmail("");
          setAddress("");
          setPhone("");
        }
      } catch (error: any) {
        toast.error("An error occurred: " + error.message);
      }
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-70px)] pt-8">
      <div className="pl-10">
        <span onClick={() => navigate("/")}>
          <BsArrowLeftSquare className="text-[30px] cursor-pointer text-purple-400 hover:transition-all hover:scale-110 hover:duration-200 hover:ease-in-out " />
        </span>
      </div>
      <div className="w-1/3 h-auto border m-auto  shadow-md rounded-md p-5">
        <h3 className="text-[21px] font-semibold text-center underline mb-10">
          Create New User
        </h3>
        <div className="w-11/12 grid grid-cols-1 gap-5 m-auto">
          <input
            type="text"
            placeholder="Name..."
            className="w-full border rounded-md h-[38px] pl-4 outline-none text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email..."
            className="w-full border rounded-md h-[38px] pl-4 outline-none text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone..."
            className="w-full border rounded-md h-[38px] pl-4 outline-none text-sm"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address..."
            className="w-full border rounded-md h-[38px] pl-4 outline-none mb-4 text-sm"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button
            onClick={handleAddUser}
            className="w-[120px] py-2 border shadow-md rounded-md uppercase bg-green-500 hover:bg-green-600 hover:transition-all hover:duration-300 hover:ease-in-out m-auto text-center font-medium"
          >
            Create
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Create;
