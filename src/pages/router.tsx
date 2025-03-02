import { createBrowserRouter } from "react-router-dom";
import ProtectedRouter from "../components/Layout/ProtectedRouter";
import Home from "./Home";
import SignUp from "./signup";
import Page1 from "./page";
import Page2 from "./page2";
import Page3 from "./page3";

const router = createBrowserRouter([
  {
    element: <ProtectedRouter />,
    children: [
      {
        path: "/page1",
        element: <Page1 />,
      },
      {
        path: "/page2",
        element: <Page2 />,
      },
      {
        path: "/page3",
        element: <Page3 />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export { router };
