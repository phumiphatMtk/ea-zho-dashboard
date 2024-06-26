import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import MainLayout from "./layouts/MainLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
