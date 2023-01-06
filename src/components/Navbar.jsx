import { Link } from "react-router-dom";

//Images
import Logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="Logo" />
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
            <span>Manuel</span>
            <span>Logout</span>
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
