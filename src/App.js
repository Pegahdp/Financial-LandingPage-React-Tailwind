import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
