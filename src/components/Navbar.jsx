import { Link } from "react-router-dom";
import { useContext } from "react";

//Images
import Logo from "../img/logo.png";

// Contexto (Permite acceder al contexto)
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  // Accediento a los values (state y funciones) del context provider
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <Link to={"/"}>
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="nav">
            <Link className="link" to="/?cat=art">
              <h6>ART</h6>
            </Link>
            <Link className="link" to="/?cat=science">
              <h6>SCIENCE</h6>
            </Link>
            <Link className="link" to="/?cat=technology">
              <h6>TECHNOLOGY</h6>
            </Link>
            <Link className="link" to="/?cat=cinema">
              <h6>CINEMA</h6>
            </Link>
            <Link className="link" to="/?cat=design">
              <h6>DESIGN</h6>
            </Link>
            <Link className="link" to="/?cat=food">
              <h6>FOOD</h6>
            </Link>
            <span>{currentUser?.username}</span>
            {currentUser ? (
              <span onClick={logout}>Logout</span>
            ) : (
              <Link className="link" to={"/login"}>
                Login
              </Link>
            )}
            <span className="write">
              <Link className="link" to="/write">
                Write
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
