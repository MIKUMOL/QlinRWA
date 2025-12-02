import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRouter from "./app/router/AppRouter";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
