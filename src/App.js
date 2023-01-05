import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// Components
import { Layout } from "./components/Layout";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Write } from "./pages/Write";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";

// Styles
import "./styles.scss";

// Definimos rutas
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // El elemento Layout puede recibir uno de estos 3 hijos dependiendo de la ruta. Esto es gracias a el Outlet definido en el componente Layout
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        {/* Envolviendo las rutas de nuestra app */}
        <RouterProvider router={routes} />
      </div>
    </div>
  );
}

export default App;
