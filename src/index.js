import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Provider (Permite a los componentes hijos tener acceso al state)
import { AuthProvider } from "./context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* Contexto de Auth */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
