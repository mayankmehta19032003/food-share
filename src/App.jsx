import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <OurStory />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
