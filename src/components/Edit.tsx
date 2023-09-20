import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsArrowLeftSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../features/user/updateUserSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { fetchUsers } from "../features/user/userSlice";
import toast, { Toaster } from "react-hot-toast";

const Edit = () => {
  const { id } = useParams();
  const userId = Number(id);
  const user = useAppSelector((state) => state.user.users);
  console.log(user);
  const userFiltered = user.filter((val) => val.id === userId);
  // console.log(userFiltered);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [updatedName, setUpdatedName] = useState<string>(
    userFiltered[0]?.name || ""
  );
  const [updatedEmail, setUpdatedEmail] = useState<string>(
    userFiltered[0]?.email || ""
  );
  const [updatedPhone, setUpdatedPhone] = useState<string>(
    userFiltered[0]?.phone || ""
  );
  const [updatedAddress, setUpdatedAddress] = useState<string>(
    userFiltered[0]?.address || ""
  );

  const handleUpdateUser = () => {
    const updatedUserData = {
      name: updatedName,
      email: updatedEmail,
      phone: updatedPhone,
      address: updatedAddress,
    };

    dispatch(updateUser({ userId, updatedUserData }))
      .unwrap()
      .then(() => {
        toast.success("User updated successfully");
        // setUserId(0);
        setUpdatedName("");
        setUpdatedEmail("");
        setUpdatedPhone("");
        setUpdatedAddress("");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        toast.error("Failed to update user: " + error.message);
      });
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

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
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email..."
            className="w-full border rounded-md h-[38px] pl-4 outline-none text-sm"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone..."
            className="w-full border rounded-md h-[38px] pl-4 outline-none text-sm"
            value={updatedPhone}
            onChange={(e) => setUpdatedPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address..."
            className="w-full border rounded-md h-[38px] pl-4 outline-none mb-4 text-sm"
            value={updatedAddress}
            onChange={(e) => setUpdatedAddress(e.target.value)}
          />
          <button
            onClick={handleUpdateUser}
            className="w-[120px] py-2 border shadow-md rounded-md uppercase bg-green-500 m-auto text-center font-medium"
          >
            Update
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Edit;
