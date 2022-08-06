import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WorkSpaceProvider } from "./context/workspace";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WorkSpaceProvider>
      <App />
    </WorkSpaceProvider>
  </React.StrictMode>
);
