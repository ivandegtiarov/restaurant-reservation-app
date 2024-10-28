import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MenuContextProvider from "./context/MenuContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MenuContextProvider>
      <App />
    </MenuContextProvider>
  </StrictMode>
);
