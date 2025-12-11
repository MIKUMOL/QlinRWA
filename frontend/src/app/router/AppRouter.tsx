import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/home/LandingPage";

import PatientLayout from "../layouts/PatientLayout";
import Dashboard from "../pages/patient/Dashboard";
import NewAppointment from "../pages/patient/NewAppointment";
import Settings from "../pages/patient/Settings";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {}
        <Route path="/" element={<LandingPage />} />

        {}
        <Route path="/patient" element={<PatientLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="newAppointment" element={<NewAppointment />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
