import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import OurStory from "./components/OurStory/OurStory";
import Footer from "./components/Footer/Footer";
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
