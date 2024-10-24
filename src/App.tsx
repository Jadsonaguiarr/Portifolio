import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./pages/base";
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portifolio" element={<Base />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
