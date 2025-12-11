import { Outlet, NavLink, useLocation } from "react-router-dom";
import "./PatientLayoutStyle.css";

import homeIcon from "../assets/icons/home-outline.svg";
import calendarIcon from "../assets/icons/calendar-outline.svg";
import settingsIcon from "../assets/icons/settings-outline.svg";


export default function PatientLayout() {
  const location = useLocation();

  return (
    <div className="patient-layout">

      

      <main className="patient-content">
        <Outlet />
        
      </main>

      {}
      <div
        className={`bottom-nav notch-${
          location.pathname.includes("dashboard")
            ? "dashboard"
            : location.pathname.includes("new")
            ? "new"
            : "settings"
        }`}
      >
        <ul>
          <li>

            <NavLink to="/patient/dashboard" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
                <img src={homeIcon} alt="Home" className="icon" />
                <span className="label">Übersicht</span>
            </NavLink>

          </li>

          <li>

            <NavLink to="/patient/newAppointment" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
              <img src={calendarIcon} alt="Calendar" className="icon" />
              <span className="label">Neuer Termin</span>
            </NavLink>

          </li>

          <li>

            <NavLink to="/patient/settings" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
              <img src={settingsIcon} alt="Settings" className="icon" />
              <span className="label">Einstellungen</span>
            </NavLink>

          </li>
        </ul>
      </div>
    </div>
  );
}
