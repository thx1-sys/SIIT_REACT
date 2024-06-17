import React, { useEffect, useState } from "react";
import {
  useLocation,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { HomePage } from "./containers/HomePage";
import { LoginPage } from "./containers/LoginPage";
import { StudentPage } from "./containers/StudentPage";
import { CareersPage } from "./containers/CareersPage";
import { NewsPage } from "./containers/NewsPage";
import { SchoolData } from "./containers/SchoolData";
import { KardexPage } from "./containers/KardexPage";
import { CalendarPage } from "./containers/CalendarPage";
import { NotesPage } from "./containers/NotesPage";
import { InscriptionPage } from "./containers/InscriptionPage";
import { SubjectsPage } from "./containers/SubjectsPage";
import { GrupPage } from "./containers/GrupPage";
import PrivateRoute from "./PrivateRoute";
import { useCookies } from "react-cookie";
import { CareerDetails } from "./containers/CareerDetails";
import { AdminPage } from "./containers/AdminPage";
import { AdminNoticePage } from "./containers/AdminNoticePage";
import { AdminNewNotice } from "./containers/AdminNewNotice";
import { AdminNewWarning } from "./containers/AdminNewWarning";
import { AdminNewWarningAdd } from "./containers/AdminNewWarningAdd";
import { RecoveryPage } from "./containers/RecoveryPage";
import { AdminCalendar } from "./containers/Calendario/AdminCalendar";
import { LoginCard } from "./components/Card/LoginCard";
import { Error } from "./containers/Error";
import { InscriptionPayPage } from "./containers/InscriptionPayPage";
import { ExtraPage } from "./containers/ExtraPage";
import { PerfilStudentPage } from "./containers/PerfilStudentPage";
import { AdminUsuarios } from "./containers/Usuarios/AdminUsuarios";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  const [cookies] = useCookies(["isAuthenticated"]);
  const [isAuthenticated, setIsAuthenticated] = useState(
    cookies.isAuthenticated || false
  );

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/career/:id" element={<CareerDetails />} />
        <Route
          path="/login"
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/careers" element={<CareersPage />} />
        <Route
          path="/schooldata"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              element={<SchoolData />}
            />
          }
        />
        <Route
          path="/student"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              element={<StudentPage />}
            />
          }
        />
        <Route path="/news" element={<NewsPage />} />
        <Route
          path="/kardex"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              element={<KardexPage />}
            />
          }
        />
        <Route
          path="/notes"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              element={<NotesPage />}
            />
          }
        />
        <Route
          path="/insciption"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              element={<InscriptionPage />}
            />
          }
        />
        <Route
          path="/subjects"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              element={<SubjectsPage />}
            />
          }
        />
        <Route
          path="/grup"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              element={<GrupPage />}
            />
          }
        />
        <Route path="/adminhome" element={<AdminPage />} />
        <Route path="/adminnew" element={<AdminNoticePage />} />
        <Route path="/adminnew/edit/:id" element={<AdminNewNotice />} />
        <Route path="/adminnew/edit" element={<AdminNewNotice />} />
        <Route path="/adminwar" element={<AdminNewWarning />} />
        <Route path="/adminwar/edit" element={<AdminNewWarningAdd />} />
        <Route path="/adminwar/edit/:id" element={<AdminNewWarningAdd />} />
        <Route path="/recovery" element={<RecoveryPage />} />
        <Route path="/admincalendar" element={<AdminCalendar />} />
        <Route path="/build" element={<Error />} />
        <Route path="/1build" element={<Error />} />
        <Route path="/2build" element={<Error />} />
        <Route path="/3build" element={<Error />} />
        <Route path="/extra" element={<ExtraPage />} />
        <Route path="/perfil" element={<PerfilStudentPage />} />
        <Route path="/adminuser" element={<AdminUsuarios />} />
        {/* <Route path="/pay" element={<InscriptionPayPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
