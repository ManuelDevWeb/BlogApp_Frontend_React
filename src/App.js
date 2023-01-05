import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// Definimos rutas
const routes = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/test",
    element: <div>Test</div>,
  },
]);

function App() {
  return <div className="App">Hello world</div>;
}

export default App;
