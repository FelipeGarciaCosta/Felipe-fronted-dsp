import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//Tipo global para evitar errores de JSX en TS
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

// Tipos de la respuesta del backend
interface JwtResponse {
  token: string;
  username: string;
  roles: string[];
}

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState(null as string | null);
  const navigate = useNavigate();


  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const response = await axios.post<JwtResponse>(
      "http://10.1.1.38:8080/api/auth/login",
      { username, password }
    );

    // Verificar que el status sea 200
    if (response.status === 200) {
      const { token, username: user, roles } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", user);
      localStorage.setItem("roles", JSON.stringify(roles));

       // Mensaje de prueba (aquí puedes redirigir)
      //alert("✅ Login exitoso");
      console.log("Token:", token);
      navigate("/inicio");
    } else {
      setError("Credenciales inválidas.");
    }

  } catch (err) {
    console.error(err);

    // Opcionalmente puedes inspeccionar err.response.status para mensajes específicos
    if (axios.isAxiosError(err) && err.response) {
      if (err.response.status === 401) {
        setError("Usuario o contraseña incorrectos.");
      } else {
        setError("Error en el servidor. Intenta más tarde.");
      }
    } else {
      setError("Error de conexión.");
    }
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Iniciar Sesión
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-2">Usuario</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 text-sm mb-2">Contraseña</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;
