import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { RegisterProvider } from "./contexts/RegisterContext/RegisterProvider";
import "@/styles/variables/globals.css";
import App from "@/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <RegisterProvider>
          <App />
        </RegisterProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
