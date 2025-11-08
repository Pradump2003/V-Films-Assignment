import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OurStory from "./pages/OurStory";
import Services from "./pages/Services";
import FilmProduction from "./pages/FilmProduction";
import Branding from "./pages/Branding";
import ArtCreation from "./pages/ArtCreation";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/services" element={<Services />} />
        <Route path="/film-production" element={<FilmProduction />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/art-creation" element={<ArtCreation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
