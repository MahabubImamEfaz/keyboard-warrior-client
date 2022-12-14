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
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import MyBookings from "./Pages/Dashboard/MyBookings/MyBookings";
import AllSellers from "./Pages/Dashboard/AllSellers/AllSellers";
import AllBuyers from "./Pages/Dashboard/AllBuyers/AllBuyers";
import AddProducts from "./Pages/Dashboard/AddProducts/AddProducts";
import MyProducts from "./Pages/Dashboard/MyProducts/MyProducts";

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
            fetch(
              `https://keyboard-warrior-server.vercel.app/category/${params.id}`
            ),
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
          element: <MyBookings></MyBookings>,
        },
        {
          path: "/dashboard/mybookings",
          element: <MyBookings></MyBookings>,
        },
        {
          path: "/dashboard/addproducts",
          element: <AddProducts></AddProducts>,
        },
        {
          path: "/dashboard/allsellers/:id",
          element: <AllSellers></AllSellers>,
          loader: ({ params }) =>
            fetch(
              `https://keyboard-warrior-server.vercel.app/buyerseller/${params.id}`
            ),
        },
        {
          path: "/dashboard/allbuyers/:id",
          element: <AllBuyers></AllBuyers>,
          loader: ({ params }) =>
            fetch(
              `https://keyboard-warrior-server.vercel.app/buyerseller/${params.id}`
            ),
        },
        {
          path: "/dashboard/myproducts/:id",
          element: <MyProducts></MyProducts>,
          loader: ({ params }) =>
            fetch(
              `https://keyboard-warrior-server.vercel.app/myproducts/${params.id}`
            ),
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
