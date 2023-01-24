import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// Context (Permite acceder al contexto)
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
  // State para manejar los valores ingresados por el usuario en los input
  const [infoUser, setInfoUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  // State para manejar el error
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Accediendo a los values (state y funciones) del context provider
  const { register } = useContext(AuthContext);

  // Funcion que se ejecuta al escribir en los inputs
  const handleChange = (e) => {
    // Actualizamos el state
    setInfoUser({
      ...infoUser,
      [e.target.name]: e.target.value,
    });
  };

  // Funcion que se ejecuta al enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Llamamos la funcion que permite registrarnos
      register(infoUser);
      // Redireccionamos al usuario
      navigate("/login");
    } catch (err) {
      setError(err.response.data.body);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={infoUser.username}
        />
        <input
          required
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={infoUser.email}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={infoUser.password}
        />
        <button type="submit">Register</button>
        {error && <p>{error}</p>}
        <span>
          Do You have an account? <Link to="/login">Login</Link>{" "}
        </span>
      </form>
    </div>
  );
};

export { Register };
