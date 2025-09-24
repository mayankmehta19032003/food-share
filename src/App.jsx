import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import OurStory from "./components/OurStory/OurStory";
import AboutUs from "./components/AboutUs/AboutUs";
import Donation from "./components/Donate/Donate";
import Events from "./components/EventsList/EventList";
import ContributeFood from "./components/ContributeFood/ContributeFood";
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
         <Route
          path="/events"
          element={
            <>
              <Navbar />
              <Events />
              <Footer />
            </>
          }
        />
        <Route
          path="/contribute"
          element={
            <>
              <Navbar />
              <ContributeFood />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
