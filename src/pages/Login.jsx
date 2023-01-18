import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// Contexto (Permite acceder al contexto)
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  // State para manejar los valores ingresados por el usuario en los inputs
  const [infoUser, setInfoUser] = useState({
    username: "",
    password: "",
  });
  // State para manejar el error
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Accediento a los values (state y funciones) del context provider
  const { login } = useContext(AuthContext);

  // Funcion que se ejecuta al enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Llamamos la funcion que permite logearnos
      await login(infoUser);
      // Redireccionamos al usuario
      navigate("/");
    } catch (err) {
      setError(err.response.data.body);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={infoUser.username}
          onChange={(e) =>
            setInfoUser({ ...infoUser, [e.target.name]: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={infoUser.password}
          onChange={(e) =>
            setInfoUser({ ...infoUser, [e.target.name]: e.target.value })
          }
        />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
        <span>
          Don't you have an account? <Link to="/register">Register</Link>{" "}
        </span>
      </form>
    </div>
  );
};

export { Login };
