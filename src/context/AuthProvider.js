import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Creando el contexto (Permite a los componentes acceder al contexto)
const AuthContext = createContext();

// Provider (Permite a los componentes hijos tener acceso al state)
const AuthProvider = ({ children }) => {
  // State de usuario actual
  const [currentUser, setCurrentUser] = useState(
    // Obtenemos el user del local storage
    JSON.parse(localStorage.getItem("user") || null)
  );

  // UseState que se ejecuta cada que cambie el valor de currentUser
  useEffect(() => {
    // Agregamos el usuario al local storage
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  // Funcion para registrarnos
  const register = async (info) => {
    await axios.post("http://localhost:8800/api/auth/register", info);
  };

  // Funcion para logearnos
  const login = async (info) => {
    const res = await axios.post("http://localhost:8800/api/auth/login", info);
    console.log(res);
    setCurrentUser(res.data);
  };

  // Funcion para deslogearnos
  const logout = async (info) => {
    await axios.post("http://localhost:8800/api/auth/logout");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
