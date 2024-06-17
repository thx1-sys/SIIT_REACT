import React, { useState } from "react";
import { EmailInput } from "../Input/EmailInput";
import { CodeInput } from "../Input/CodeInput";
import { PasswordInput } from "../Input/PasswordInput";
import "./LoginCard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SuccessToast } from "../Alert/SuccessToast";

function RecoveryAcountCard({}) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recoveryCode, setRecoveryCode] = useState("");
  const [codeError, setCodeError] = useState(false);
  const [codeVerified, setCodeVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userId, setUserId] = useState(null);
  const [message, setMessage] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);

  const generateRandomString = (length = 5) => {
    return Math.random().toString(36).substr(2, length);
  };

  const handleRecovery = async () => {
    setLoading(true);
    try {
      const randomString = generateRandomString();

      const response = await axios.post(
        `http://localhost:4000/api/email/send-email?email=${email}&code=${randomString}`, // Aquí enviamos el correo electrónico y el código como parámetros de consulta en la URL
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Si el correo electrónico se envió con éxito, cambia el estado de `emailSent` a `true`.
      if (response.status === 200) {
        setEmailSent(true);
      }
    } catch (error) {
      setEmailError(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const verifyCode = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/email/");

      if (response.status === 200) {
        const user = response.data.body.find((user) => user.correo === email);

        if (user && user.codigo === recoveryCode) {
          console.log("El código es correcto");
          setCodeError(false); // Set codeError to false if the code is correct
          setCodeVerified(true); // Set codeVerified to true if the code is correct

          setUserId(user.id);
          console.log(userId);
        } else {
          console.log("El código es incorrecto");
          setCodeError(true); // Set codeError to true if the code is incorrect
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const changePassword = async (newPassword) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/email/", // URL modificada
        {
          id: userId, // Aquí enviamos el id del usuario en el cuerpo de la petición
          contrasena: newPassword, // Aquí enviamos la nueva contraseña en el cuerpo de la petición
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        console.log("La contraseña se cambió con éxito");
        setMessage("La contraseña se cambió con éxito");
        setPasswordChanged(true);

        setTimeout(() => {
          navigate("/login"); // Reemplaza '/ruta-deseada' con la ruta a la que quieres redirigir
        }, 3000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangePassword = (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      // Aquí puedes mostrar un mensaje de error al usuario
      console.log("Las contraseñas no coinciden");
      return;
    }

    changePassword(newPassword);
  };

  return (
    <div className="w-8/10 h-9/10 self-center place-self-center grid grid-cols-1 auto-rows-auto items-center justify-center animate-slideRightFadeIn">
      <div className="grid items-center">
        <a href="/">
          <img
            src="../../src/assets/images/logoITDFull.png"
            alt="Escudo del ITD"
            className="w-48 m-auto"
          />
        </a>
        <h1 className="mt-10 text-3xl font-bold text-itd-blue text-center">
          Recuperación de cuenta
        </h1>
        <p className="text-center mt-2 mb-4">
          Ingresa tu correo para generar y enviar un código a su correo
          electrónico para poder cambiar su contraseña.
        </p>
        {!emailSent ? (
          <>
            <EmailInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isError={emailError}
            />
            {emailError && (
              <p className="text-red-500">
                No se encontró el correo electrónico.
              </p>
            )}
            <div className="place-items-end text-right mt-2">
              <button
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/login");
                }}
                className="mt-2 text-gray-500 cursor-pointer hover:text-itd-blue"
              >
                ¿quieres ingresar sesión?
              </button>
            </div>
            <button
              onClick={handleRecovery}
              className="w-full flex justify-center items-center gap-2 p-4 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#5C1B33] via-[#942B52] to-[#C2396C] hover:shadow-xl hover:shadow-rose-800 hover:scale-105 hover:from-[#C2396C] hover:to-[#5C1B33] mt-8 text-lg transform transition duration-500"
            >
              {loading ? (
                <div className="flex flex-row gap-2">
                  <div className="w-4 h-4 rounded-full bg-white animate-bounce"></div>
                  <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.5s]"></div>
                </div>
              ) : (
                "Enviar correo de recuperación"
              )}
            </button>
          </>
        ) : codeVerified ? (
          <div>
            <h2 className="text-2xl text-center font-bold mb-2">
              Cambiar contraseña
            </h2>
            <p className="text-gray-500 text-sm">Ingresa tu nueva contraseña</p>
            <PasswordInput
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Nueva contraseña"
            />
            <p className="text-gray-500 text-sm mt-4">Confirma contraseña</p>
            <PasswordInput
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmar nueva contraseña"
            />
            <button
              onClick={handleChangePassword}
              className="w-full flex justify-center items-center gap-2 p-4 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#5C1B33] via-[#942B52] to-[#C2396C] hover:shadow-xl hover:shadow-rose-800 hover:scale-105 hover:from-[#C2396C] hover:to-[#5C1B33] mt-8 text-lg transform transition duration-500"
            >
              Cambiar contraseña
            </button>
            {message && (
              <div>
                <p className="text-green-500 font-extralight text-sm">
                  {message}
                </p>
                <SuccessToast
                  message="Contraseña cambiada con éxito"
                  showToast={passwordChanged}
                  setShowToast={setPasswordChanged}
                />
              </div>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl text-center font-bold mb-2">
              Código generado
            </h2>
            <p className="font-extralight text-center">
              Revisa tu correo electrónico para obtener el código de
              recuperación.
            </p>
            <CodeInput
              type="text"
              placeholder="Ingresa el código de recuperación"
              onChange={(e) => setRecoveryCode(e.target.value)}
              isError={codeError} // Pass codeError as isError
            />
            {codeError && (
              <p className="text-red-500">
                El código de recuperación es incorrecto.
              </p>
            )}

            <div className="place-items-end text-right mt-2">
              <button
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/login");
                }}
                className="mt-2 text-gray-500 cursor-pointer hover:text-itd-blue"
              >
                ¿quieres ingresar sesión?
              </button>
            </div>
            <button
              onClick={verifyCode}
              className="w-full flex justify-center items-center gap-2 p-4 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#5C1B33] via-[#942B52] to-[#C2396C] hover:shadow-xl hover:shadow-rose-800 hover:scale-105 hover:from-[#C2396C] hover:to-[#5C1B33] mt-8 text-lg transform transition duration-500"
            >
              Cambiar contraseña
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export { RecoveryAcountCard };
