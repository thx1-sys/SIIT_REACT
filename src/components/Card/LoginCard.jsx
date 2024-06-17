import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { EmailInput } from "../Input/EmailInput";
import { PasswordInput } from "../Input/PasswordInput";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./LoginCard.css";
// import UserContext from "../Context/UserContext";

function LoginCard({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [cookies, setCookie] = useCookies(["isAuthenticated"]);
  const [rememberMe, setRememberMe] = useState(false); // New state for the checkbox
  const [data, setData] = useState(null);
  // const { user, setUser } = useContext(UserContext);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9]+@itdurango\.edu\.mx$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = async () => {
    if (email === "" || password === "") {
      setErrorMessage("Por favor, complete todos los campos.");
      setTimeout(() => setErrorMessage(""), 5000); // Clear the error message after 5 seconds
      return;
    }

    // if (!validateEmail(email)) {
    //   setErrorMessage(
    //     "Extensión de correo incorrecta. Por favor, ingrese un correo electrónico válido con la extensión '@itdurango.edu.mx'."
    //   );
    //   setTimeout(() => setErrorMessage(""), 5000); // Clear the error message after 5 seconds
    //   return;
    // }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          usuario: email,
          password: password,
        }
      );

      const responseFromGet = await axios.get(
        "http://localhost:4000/api/usuarios"
      );
      const userRes = responseFromGet.data.body.find(
        (user) => user.correo === email
      );

      // Comprueba si se encontró un usuario
      if (userRes) {
        console.log("Usuario encontrado:", userRes);
        localStorage.setItem("userId", userRes.id);
      } else {
        // Maneja el caso en que no se encontró un usuario
        console.error("No se encontró un usuario con ese correo electrónico");
      }

      switch (response.data.status) {
        case 250:
          if (response.status !== 500) {
            // Login successful
            if (rememberMe) {
              // Only set the cookie if the checkbox is checked
              setCookie("isAuthenticated", true, { path: "/" });
            }
            setIsAuthenticated(true); // Update isAuthenticated state in App
            navigate("/student");
          }
          break;
        case 251:
          // Handle status 251 here
          navigate("/routeFor251");
          break;
        case 252:
          // Handle status 252 here
          navigate("/adminhome");
          break;
        default:
        // Handle other status codes here
      }
    } catch (error) {
      // Handle error during login
      if (error.response && error.response.status === 401) {
        setErrorMessage(
          "Datos incorrectos. Por favor, revise la información ingresada."
        );
        setTimeout(() => setErrorMessage(""), 5000); // Clear the error message after 5 seconds
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="w-8/10 h-9/10 self-center place-self-center grid grid-cols-1 auto-rows-auto items-center justify-center animate-slideLeftFadeIn">
      <div className="grid items-center">
        <a href="/">
          {" "}
          <img
            src="../../src/assets/images/logoITDFull.png"
            alt="Escudo del ITD"
            className="w-48 m-auto"
          />{" "}
        </a>
        <h1 className="mt-10 text-3xl font-bold text-itd-blue text-center">
          Bienvenido de Nuevo 👋​
        </h1>
        <p className="text-center mt-2 mb-4">
          Por favor inicie sesión en su cuenta.
        </p>
        {errorMessage && (
          <p className="text-red-500 text-center fadeIn">{errorMessage}</p>
        )}
        <div className="w-8/10 grid m-auto">
          <EmailInput
            onChange={(e) => setEmail(e.target.value)}
            isError={!!errorMessage}
          />
          <PasswordInput
            onChange={(e) => setPassword(e.target.value)}
            isError={!!errorMessage}
          />
          <div className="grid grid-cols-2 mt-2 items-center justify-between px-2 text-gray-500">
            <div className="checkbox-wrapper-46">
              <input
                type="checkbox"
                id="cbx-46"
                className="inp-cbx"
                checked={rememberMe} // Set the checkbox value to the state
                onChange={(e) => setRememberMe(e.target.checked)} // Update the state when the checkbox changes
              />
              <label htmlFor="cbx-46" className="cbx">
                <span>
                  <svg viewBox="0 0 12 10" height="10px" width="12px">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>Recuérdame</span>
              </label>
            </div>

            <div className="place-items-end text-right ">
              <a
                onClick={() => navigate("/recovery")}
                className="mt-2 text-gray-500 cursor-pointer hover:text-itd-blue"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>
          <button
            onClick={handleLogin}
            className="w-full flex justify-center items-center gap-2 p-4 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#5C1B33] via-[#942B52] to-[#C2396C] hover:shadow-xl hover:shadow-rose-800 hover:scale-105 hover:from-[#C2396C] hover:to-[#5C1B33] mt-4 text-lg transform transition duration-500"
          >
            Inicia sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export { LoginCard };
