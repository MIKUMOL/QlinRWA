import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-wrapper">
      <Outlet />
    </div>
  );
}
