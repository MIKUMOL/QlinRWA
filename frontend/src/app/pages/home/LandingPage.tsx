import "../../styles/pages/home/landing.css";
import qlinLogo from "../../assets/qlin_logo.svg";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handlePatientClick = () => navigate("/patient/dashboard");
  const handleDoctorClick = () => navigate("/doctor/login");

  return (
    <div className="landing-root">
      <div className="landing-card">
        {/* Logo optional */}
        <img
          className="landing-logo"
          src={qlinLogo}
          alt="Qlin Logo"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />

        <h1 className="landing-title">Qlin</h1>
        <p className="landing-subtitle">Weniger warten. Besser planen.</p>

        <div className="landing-actions">
          <button className="btn btn-patient" onClick={handlePatientClick}>
            Ich bin Patient
          </button>

          <button className="btn btn-doctor" onClick={handleDoctorClick}>
            Ich bin Arzt
          </button>
        </div>

        <p className="landing-footnote">
          Wähle aus, wie du Qlin nutzen möchtest.
        </p>
      </div>
    </div>
  );
}