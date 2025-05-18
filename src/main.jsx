import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import AddUser from "./components/AddUser.jsx";
import UsersInfo from "./pages/UsersInfo.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import Profile from "./pages/Profile.jsx";
import UpdateUser from "./components/UpdateUser.jsx";
import UpdateProfile from "./pages/UpdateProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/add-user",
        element: <AddUser />,
      },
      {
        path: "/update-user",
        element: <UpdateUser />,
      },
      {
        path: "/users/",
        element: <UsersInfo />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
