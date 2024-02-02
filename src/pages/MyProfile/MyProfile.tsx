import { useContext } from "react";
import useAxiosPrivate from "../../Hooks/AxiosPrivate/useAxiosPrivate";
import useUserInfo from "../../Hooks/UserInfo/useUserInfo";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyProfile = () => {
    // const [userInfo, refetch] = useUserInfo();
    const axiosPrivate=useAxiosPrivate();
    // console.log(userInfo)
    const {user}=useContext(AuthContext)

    const {data: userInfo, refetch}= useQuery({
        queryKey: ["userInfo", user?.email],
        queryFn: async ()=>{
            const res= await axiosPrivate.get(`/currentUserInfo/${user?.email}`);
            console.log(res.data)
            return res.data;
        }
      })
      console.log(userInfo)
      console.log(user);

    const handleUpdate =async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userName = (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value;
        const userImage = (e.currentTarget.elements.namedItem('image') as HTMLInputElement).value;

        console.log(userName, userImage);
        const UpdateUserInfo={
            userName: userName,
            userImage: userImage
        }

        const res= await axiosPrivate.put(`/updateUserInfo/${userInfo.email}`, UpdateUserInfo);
        console.log(res.data);

    }
    return (
        <div className="mb-12">
            <form onSubmit={handleUpdate} className="bg-gray-300 w-[450px] mx-auto mt-12 px-5 py-7 space-y-8">
                <div className="flex gap-3">
                    <h2 className="text-lg">Full Name: </h2>

                    <input className="px-2 rounded-md" defaultValue={userInfo?.displayName} type="text" name="name" id="" />
                </div>
               

                <div className="flex gap-3">
                    <h2 className="text-lg">Image </h2>

                    <input className="px-2 rounded-md" defaultValue={userInfo?.photoURL} type="text" name="image" id="" />
                </div>

                <div className="flex gap-3">
                    <h2 className="text-lg">Email: </h2>

                    <input className="bg-gray-200 px-2 rounded-md cursor-not-allowed" defaultValue={userInfo?.email} readOnly type="text" name="" id="" />
                </div>



                <br />
                <div className="text-center">
                    <button className="btn bg-violet-700 text-white ">Update</button>
                </div>

            </form>
        </div>
    );
};

export default MyProfile;