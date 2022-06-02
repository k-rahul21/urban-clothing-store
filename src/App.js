import { Routes, Route } from "react-router-dom";

import "./App.css";
import { HomePage } from "./pages/Home-page/home-page";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
