import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import TasksBoard from "../pages/TasksBoard/TaskBoard";
import PrivateRoute from "./PrivateRoute";
import UpdateTask from "../pages/UpdateTask/UpdateTask";
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
        element: <PrivateRoute><TasksBoard /></PrivateRoute>
      },
      {
        path:"updatetask/:id",
        element:<PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/updatetask/${params.id}`)
      }
    ],
  },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/register",
      element: <Register></Register>
    },
  
]);

export default router;
