import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import OurStory from "./components/OurStory/OurStory";
import AboutUs from "./components/AboutUs/AboutUs";
import Donation from "./components/Donate/Donate";
import { Routes, Route } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <OurStory />
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/donation"
          element={
            <>
              <Navbar />
              <Donation />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
