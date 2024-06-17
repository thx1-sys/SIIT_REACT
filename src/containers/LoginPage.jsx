import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { LoginCard } from "../components/Card/LoginCard";
import { LoginImage } from "../components/Card/LoginImage";

function LoginPage({ setIsAuthenticated }) {
  const [cookies] = useCookies(["isAuthenticated"]);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = cookies.isAuthenticated || false;
    setIsAuthenticated(isAuthenticated);

    if (isAuthenticated) {
      navigate("/student");
    }
  }, [cookies, setIsAuthenticated, navigate]);

  return (
    <div className="w-screen h-screen LoginPage flex items-center justify-center bg-gradient-linear-white">
      <div className="bg-white w-8/10 h-9/10 rounded-3xl grid grid-cols-2 justify-center items-center shadow-2xl opacity-85 hover:opacity-100 transform transition duration-500 hover:scale-105">
        <LoginCard setIsAuthenticated={setIsAuthenticated} />
        <LoginImage setIsAuthenticated={setIsAuthenticated} />
      </div>
    </div>
  );
}

export { LoginPage };
