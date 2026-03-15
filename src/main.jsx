import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Stairs from "./components/home/common/Stairs.jsx";
import NavContext from "./context/NavContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavContext>
      <BrowserRouter>
        <Stairs>
          <App />
        </Stairs>
      </BrowserRouter>
    </NavContext>
  </StrictMode>
);
