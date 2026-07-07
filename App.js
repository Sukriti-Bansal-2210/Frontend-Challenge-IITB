import Navbar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
import Pricing from "./Components/Pricing/Pricing";
import CaseStudies from "./Components/CaseStudies/CaseStudies";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Pricing />
        <CaseStudies />
      </main>

      <Footer />
    </>
  );
}

export default App;