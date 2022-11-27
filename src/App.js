import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import CategorizedProducts from "./Pages/CategorizedProducts/CategorizedProducts";
import Home from "./Pages/Home/Home";

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
          path: "/category/:id",
          element: <CategorizedProducts></CategorizedProducts>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/category/${params.id}`),
        },
      ],
    },
  ]);
  return (
    <div className="max-[1440px]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
