import { Outlet } from "react-router-dom";

// Components
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      {/* Outlet permite insertar hijos, en este caso insertaremos componentes en el Layout */}
      <Outlet />
      <Footer />
    </div>
  );
};

export { Layout };
