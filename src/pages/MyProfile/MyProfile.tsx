import { useContext } from "react";
import useAxiosPrivate from "../../Hooks/AxiosPrivate/useAxiosPrivate";
// import useUserInfo from "../../Hooks/UserInfo/useUserInfo";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";

const MyProfile = () => {
  // const [userInfo, refetch] = useUserInfo();
  const axiosPrivate = useAxiosPrivate();
  // console.log(userInfo)
  const { user } = useContext(AuthContext);

  const { data: userInfo, refetch } = useQuery({
    queryKey: ["userInfo", user?.email],
    queryFn: async () => {
      const res = await axiosPrivate.get(`/currentUserInfo/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  console.log(userInfo);
  console.log(user);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userName = (
      e.currentTarget.elements.namedItem("name") as HTMLInputElement
    ).value;
    const userImage = (
      e.currentTarget.elements.namedItem("image") as HTMLInputElement
    ).value;

    console.log(userName, userImage);
    const UpdateUserInfo = {
      userName: userName,
      userImage: userImage,
    };

    const res = await axiosPrivate.put(
      `/updateUserInfo/${userInfo.email}`,
      UpdateUserInfo
    );
    console.log(res.data);
    if (res.data.modifiedCount > 0) {
      refetch();
      toast.success("Profile updated successfully");
    }
  };
  return (
    <div className="min-h-[calc(100vh-348px)] mb-12 lg:mb-0">
      <form
        onSubmit={handleUpdate}
        className="bg-primeColor bg-opacity-35 md:w-[450px] rounded-lg  mx-auto mt-12 px-5 py-7 space-y-2"
      >
        <div className="flex flex-col gap-1">
          <h2 className="text-lg">Full Name: </h2>

          <input
            className="py-3 px-3 rounded-lg"
            defaultValue={userInfo?.displayName}
            type="text"
            name="name"
            id=""
          />
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-lg">Image </h2>

          <input
            className="py-3 px-3 rounded-lg"
            defaultValue={userInfo?.photoURL}
            type="text"
            name="image"
            id=""
          />
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-lg">Email: </h2>

          <input
            className="bg-gray-200 py-3 px-3 rounded-lg cursor-not-allowed"
            defaultValue={userInfo?.email}
            readOnly
            type="text"
            name=""
            id=""
          />
        </div>

        <br />
        <div className="text-center">
          <button className="px-8 rounded-lg py-3 bg-primeColor text-white ">
            Update
          </button>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MyProfile;
