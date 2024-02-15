import { useContext, useRef } from "react";

/* eslint-disable @typescript-eslint/no-unused-vars */

import useAxiosPrivate from "../../Hooks/AxiosPrivate/useAxiosPrivate";
// import useUserInfo from "../../Hooks/UserInfo/useUserInfo";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/AxiosPublic/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMAGE_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
import { MdOutlineDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const MyProfile = () => {
  // const [userInfo, refetch] = useUserInfo();
  const axiosPrivate = useAxiosPrivate();
  const axiosPublic = useAxiosPublic();
  const imageInputRef = useRef<HTMLInputElement>(null);
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

    const form = e.target as HTMLFormElement;

    const imageFile = {
      image: form.image.files[0],
    };
    const file = imageFile.image as File;
    // const imageInput = form.image as HTMLInputElement;
    // const imageFile = imageInput.files && imageInput.files[0];
    console.log(imageFile)
    if (!imageFile) {
      const userName = (form.elements.namedItem("name") as HTMLInputElement)
        ?.value;

      // console.log(userName,"success")

      console.log(userName);
      const UpdateUserInfo = {
        userName: userName,
      };
      console.log(UpdateUserInfo);

      const res = await axiosPrivate.put(
        `/updateUserInfo/${userInfo.email}`,
        UpdateUserInfo
      );
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        if (imageInputRef.current) {
          imageInputRef.current.value = "";
        }
        toast.success("Profile updated successfully");
      }
    } else {

      if (file && file.size && file.size > 50 * 1024) {
        // Image size exceeds 100KB, show error message
        toast.error("Image size should be less than 50KB");
        return;
      }
      console.log("hello")
      const result = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (result.data.success) {
        const userName = (form.elements.namedItem("name") as HTMLInputElement)
          ?.value;

        // console.log(userName,"success")
        const userImage = result.data.data.display_url;

        console.log(userName, userImage);
        const UpdateUserInfo = {
          userName: userName,
          userImage: userImage,
        };
        console.log(UpdateUserInfo);

        const res = await axiosPrivate.put(
          `/updateUserInfo/${userInfo.email}`,
          UpdateUserInfo
        );
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          if (imageInputRef.current) {
            imageInputRef.current.value = "";
          }
          toast.success("Profile updated successfully");
        }
      }
    }
  };

  const handleRemovePhoto = () => {
    Swal.fire({
      title: "Are You sure that You want to Remove your Photo?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Save",
      denyButtonText: `Cancel`,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const res = await axiosPublic.patch(
          `/userProfile/removePhoto/${userInfo?._id}`
        );
        if (res?.data?.modifiedCount > 0) {
          refetch();
          Swal.fire("Saved!", "", "success");
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <div className="min-h-[calc(100vh-348px)] mb-12 lg:mb-6">
      <div className="w-[400px] md:w-[600px]  mx-auto bg-primeColor bg-opacity-35 mt-14 py-6 rounded-2xl">
        <div className="space-y-4">
          <div className="relative group">
            <div className="h-[200px] w-[200px] mx-auto rounded-full border-4 border-black group-hover:brightness-50 ">
              <img
                className="rounded-full h-full w-full hover:scale-110 "
                src={
                  userInfo?.photoURL
                    ? userInfo.photoURL
                    : "https://i.ibb.co/yQkyd9m/no-user-image-icon-10.png"
                }
                alt=""
              />
            </div>
            {userInfo?.photoURL && (
              <MdOutlineDeleteForever
                onClick={handleRemovePhoto}
                className="bg-red-500 py-0 px-0 border border-red-500 rounded shadow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-500 h-[60px] w-[60px] text-white cursor-pointer"
              />
            )}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold">{userInfo?.displayName}</h2>
          </div>
        </div>

        {/* todo */}

        <form
          onSubmit={handleUpdate}
          className="  rounded-lg  mx-auto mt-2 px-5 py-7 space-y-6"
        >
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">Full Name: </h2>

            <input
              className="py-3 px-3 rounded-lg"
              defaultValue={userInfo?.displayName}
              type="text"
              name="name"
              id=""
            />
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">Email: </h2>

            <input
              className="bg-gray-200 py-3 px-3 rounded-lg cursor-not-allowed"
              defaultValue={userInfo?.email}
              readOnly
              type="text"
              name=""
              id=""
            />
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">Upload Image</h2>

            <input
              className="py-1 rounded-lg"
              
              ref={imageInputRef}
              type="file"
              name="image"
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
      </div>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MyProfile;
