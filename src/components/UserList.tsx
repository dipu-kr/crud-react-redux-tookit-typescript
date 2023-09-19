import { useEffect } from "react";
import { fetchUsers } from "../features/user/userSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { BiEditAlt, BiMessageSquareAdd } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.users);
  // console.log(user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="w-full min-h-[calc(100vh-70px)] pt-10">
      <div className="w-11/12 min-h-[200px] rounded-md border m-auto px-6 py-4 shadow-lg">
        <h2 className="text-center font-semibold text-xl underline">
          Users List
        </h2>
        <div className="mt-6 rounded-md">
          <div className="grid grid-cols-6 gap-2 py-2 bg-slate-300 font-medium text-center">
            <p className="">ID</p>
            <p>Name</p>
            <p>Email</p>
            <p>Phone</p>
            <p>Address</p>
            <p>Action</p>
          </div>
          <div className="">
            {user?.length > 0 &&
              user.map((val, index) => (
                <div
                  key={index}
                  className="grid grid-cols-6 gap-2 py-2 text-center capitalize"
                >
                  <p className="">{val?.id}</p>
                  <p>{val?.name}</p>
                  <p>{val?.email}</p>
                  <p>{val?.phone}</p>
                  <p>{val?.address}</p>
                  <p className="flex justify-center items-center gap-4">
                    <BiMessageSquareAdd
                      className="text-[20px] cursor-pointer text-green-400"
                      onClick={() => navigate("/add")}
                    />
                    <BiEditAlt
                      className="text-[20px] cursor-pointer text-blue-400"
                      onClick={() => navigate("/edit")}
                    />
                    <MdOutlineDeleteOutline className="text-[20px] cursor-pointer text-red-500" />
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
