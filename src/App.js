import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import About from "./components/about";
import Juicenomics from "./components/juicenomics";
import RoadMap from "./components/roadmap/indes";
import HowToBuy from "./components/howbuy";
import Welcome from "./components/welcome";
import UnderFooter from "./components/underFooter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <About />
      <HowToBuy />
      <Juicenomics />
      <RoadMap />
      <UnderFooter />
      <Footer />
    </>
  );
}

export default App;
