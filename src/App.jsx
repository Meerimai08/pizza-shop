import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/home/basket";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
  {
    path: "/basket",
    element: <Home />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
