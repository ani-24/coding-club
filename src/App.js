import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Preloader from "./components/Preloader";

function App() {
  return (
    <div>
      <Preloader />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
