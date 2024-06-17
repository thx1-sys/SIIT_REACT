import "./LoginPage.css";
import { LoginImageRec } from "../components/Card/LoginImageRec";
import { RecoveryAcountCard } from "../components/Card/RecoveryAcountCard";

function RecoveryPage({}) {
  return (
    <div className="w-screen h-screen LoginPage flex items-center justify-center bg-gradient-linear-white">
      <div className="bg-white w-8/10 h-9/10 rounded-3xl grid grid-cols-2 justify-center items-center border border-gray-400 opacity-85 hover:opacity-100 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <LoginImageRec />
        <RecoveryAcountCard />
      </div>
    </div>
  );
}

export { RecoveryPage };
