import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ReactNode } from "react";
import Login from "./components/Login.tsx";
import Inicio from "./components/Inicio.tsx";

function PrivateRoute({ children }: { children: ReactNode }): ReactNode {
  // Verificamos el token en localStorage
  const token = localStorage.getItem("token");
 
  if (!token) {
    return <Navigate to="/" replace />;
  }else
    return <>{children}</>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route
          path="/inicio"
          element={
            <PrivateRoute>
              <Inicio />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
