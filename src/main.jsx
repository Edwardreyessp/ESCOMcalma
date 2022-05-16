import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Material from "./routes/Material";
import Temario from "./Components/Temario";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="https://edwardreyessp.github.io/ESCOMcalma/"
        element={<App />}
      />
      <Route path="/material" element={<Material />} />
      <Route path="/comunidad" element={<App />} />
      <Route path="/contactanos" element={<App />} />
      <Route path="/iniciar-sesion" element={<App />} />
      <Route path="/material/ecuaciones-diferenciales" element={<Temario />} />
    </Routes>
  </BrowserRouter>
);
