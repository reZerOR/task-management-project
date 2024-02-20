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

// interface LoaderFunctionArgs<T> {
//   params: T;
//   // Other properties if needed
// }
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/tasksboard",
        element: (
          <PrivateRoute>
            <TasksBoard id={{ id: "string" }}/>
          </PrivateRoute>
        ),
      },
      {
        path: "/board",
        element: (
          <PrivateRoute>
            <Board></Board>
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
        //     `http://localhost:5000/singleboard/${params.id}`
        //   ),
      },
      {
        path: "/accept-invitation",
        element: (
          <PrivateRoute>
            <MailAcceptINvitation></MailAcceptINvitation>
          </PrivateRoute>
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
        //     `http://localhost:5000/updatetask/${params.id}`
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
