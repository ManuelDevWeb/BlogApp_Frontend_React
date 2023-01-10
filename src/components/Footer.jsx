//Images
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Logo" />
      <span>
        Made with 💙 and React.js{" "}
        <a href="https://github.com/ManuelDevWeb">by ManuelDevWeb</a>
      </span>
    </footer>
  );
};

export { Footer };
