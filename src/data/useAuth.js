import { useState, useEffect } from "react";
import Cookies from "js-cookie";

function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      // Aquí puedes hacer una petición a tu API para obtener la información del usuario
      // Por ahora, solo vamos a poner el token en el estado del usuario
      setUser(token);
    }
  }, []);

  return { user };
}

export { useAuth };
