import { Link } from "react-router-dom";

// Components
import { Menu } from "../components/Menu";

// Images
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Img post"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Img user"
          />
          <div className="info">
            <span>Manuel</span>
            <p>Posted 2 days go</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="Icon edit" />
            </Link>
            <Link>
              <img src={Delete} alt="Icon delete" />
            </Link>
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga libero,
          accusamus saepe.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
          vulputate ipsum. Aenean tempus posuere erat. Quisque est leo, tempor
          vitae varius accumsan, pretium vitae dolor. Nulla maximus magna massa,
          vel cursus velit tristique blandit.
          <br />
          <br />
          Nulla facilisi. Pellentesque rutrum sed sem lacinia bibendum. Donec
          convallis purus et efficitur iaculis. Aenean mauris lorem, fermentum
          ac varius sit amet, posuere id dui. Quisque pharetra ante neque, sit
          amet mattis diam malesuada in. In tincidunt arcu eu eleifend placerat.
          Nam pulvinar neque urna, nec placerat dolor tristique id.
          <br />
          <br />
          Etiam interdum elit vel dolor porta, ac tincidunt tellus vehicula. Nam
          lacinia accumsan nisl eget vulputate. Donec pretium felis at consequat
          lobortis. Duis ac purus dictum, rhoncus ex id, fermentum nisl. Mauris
          in libero turpis. Phasellus at bibendum risus. Sed posuere sit amet
          risus eget laoreet. Sed mollis dignissim orci, sed ornare ipsum.
          Integer vitae lobortis est.
          <br />
          <br />
          Pellentesque rutrum sed sem lacinia bibendum. Donec convallis purus et
          efficitur iaculis. Aenean mauris lorem, fermentum ac varius sit amet,
          posuere id dui. Quisque pharetra ante neque, sit amet mattis diam
          malesuada in. In tincidunt arcu eu eleifend placerat. Nam pulvinar
          neque urna, nec placerat dolor tristique id. Etiam interdum elit vel
          dolor porta, ac tincidunt tellus vehicula. Nam lacinia accumsan nisl
          eget vulputate. Donec pretium felis at consequat lobortis. Duis ac
          purus dictum, rhoncus ex id, fermentum nisl.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export { Single };
