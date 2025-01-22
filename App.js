import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./components/LoginPage";
import HomePage from "./components/HomePage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/auth/login",
      element: <LoginForm />,
    },
  ]);
  return <RouterProvider router={router} />;
}
