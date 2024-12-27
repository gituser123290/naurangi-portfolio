import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
const App = () => {

  return (
    <>
      <Navbar /> 
      <HeroSection />
      <hr />
      <TechStack />
      <hr />
      <Experience/>
      <hr />
      <Projects />
      <hr />
      <Footer />
    </>
  );
};

export default App;
