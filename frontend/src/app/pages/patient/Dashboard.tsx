import "../../styles/pages/patient/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-root">

      <h1 className="dashboard-title">Willkommen zurück 👋</h1>

      <p className="dashboard-subtitle">
        Hier findest du deine wichtigsten Infos auf einen Blick.
      </p>

      
      <div className="dashboard-grid">
        <div className="dash-card">
          <h3>Nächster Termin</h3>
          <p>12. Dezember – 14:30 Uhr</p>
        </div>

        <div className="dash-card">
          <h3>Wartezeit</h3>
          <p>Noch nicht eingestempelt</p>
        </div>

        <div className="dash-card">
          <h3>Profil</h3>
          <p>Daten ansehen & ändern</p>
        </div>
      </div>

    </div>
  );
}
