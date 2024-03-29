import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import TasksBoard from "../pages/TasksBoard/TaskBoard";
import PrivateRoute from "./PrivateRoute";
import UpdateTask from "../pages/UpdateTask/UpdateTask";
import MyProfile from "../pages/MyProfile/MyProfile";
import Board from "../pages/Board/Board";
import MailAcceptINvitation from "../pages/Board/MailAcceptInvitation/MailAcceptINvitation";
import CreateBoard from "../pages/Board/CreateBoard/CreateBoard";
// import SingleTask from "../pages/TasksBoard/SingleTask";
import Singleboard from "../pages/Board/Singleboard/Singleboard";
import HandleInvitation from "../Hooks/HandleInvitation/HandleInvitation";
import { Support } from "../pages/Support/Support";
import Error from "../pages/Error404/Error";
import Packages from "../pages/Packages/Packages";
import Payment from "../pages/Payment/Payment";

// interface LoaderFunctionArgs<T> {
//   params: T;
//   // Other properties if needed
// }
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error /> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/tasksboard",
        element: (
          <PrivateRoute>
            <TasksBoard id={""}/>
          </PrivateRoute>
        ),
      },
      {
        path: "/board",
        element: (
          <PrivateRoute>
            <Board id ="string"></Board>
          </PrivateRoute>
        ),
      },
      {
        path: "/createboard",
        element: (
          <PrivateRoute>
            <CreateBoard></CreateBoard>
          </PrivateRoute>
        ),
      },
      {
        path: "singleboard/:id",
        element: (
          <PrivateRoute>
            <Singleboard></Singleboard>
          </PrivateRoute>
        ),
        // loader: ({ params }: LoaderFunctionArgs<{ id: string }>) =>
        //   fetch(
        //     `https://task-project-server-smoky.vercel.app/singleboard/${params.id}`
        //   ),
      },
      {
        path: "/accept-invitation/:boardId/:token",
        element: (
          // <HandleInvitation></HandleInvitation> for user email onno thakle mailer invitation emaile login korte hobe
          <HandleInvitation>
            
              <MailAcceptINvitation></MailAcceptINvitation>
         
          </HandleInvitation>



        ),
      },
      {
        path: "updatetaskInTheBoard/:id",
        element: (
          <PrivateRoute>
            <UpdateTask></UpdateTask>
          </PrivateRoute>
        ),
        // loader: ({ params }: { params: { id: string } }) =>
        //   fetch(
        //     `https://task-project-server-smoky.vercel.app/updatetask/${params.id}`
        //   ),
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/support",
        element: (
          <PrivateRoute>
        
          <Support></Support>
        </PrivateRoute>
        ),
      },
      {
        path: "/increaseLimit",
        element: (
          <PrivateRoute>
            <Packages></Packages>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
