import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import CategorizedProducts from "./Pages/CategorizedProducts/CategorizedProducts";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./Routes/PrivateRoute";
import DashboardLayout from "./Layout/DashboardLayout";
import Blog from "./Pages/Blog/Blog";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
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
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/category/:id",
          element: <CategorizedProducts></CategorizedProducts>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/category/${params.id}`),
        },
        {
          path: "*",
          element: <NotFound></NotFound>,
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <DashboardLayout></DashboardLayout>
        </PrivateRoute>
      ),
      children: [
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>,
        },
      ],
    },
  ]);
  return (
    <div className="max-[1440px]">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
