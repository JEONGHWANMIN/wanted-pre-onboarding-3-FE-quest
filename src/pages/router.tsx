import { createBrowserRouter } from "react-router-dom";
import Page1 from "./page";
import Page2 from "./page2";
import Page3 from "./page3";

const router = createBrowserRouter([
  {
    path: "/",
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
]);

export { router };
