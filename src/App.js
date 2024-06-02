import "./App.css";
import Main from "./components/Main";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MarketPlace from "./components/marketplace/MarketPlace";
import JasonGroove from "./components/JasonGroove";
import Screening from "./components/Screening";
import ChooseUs from "./components/ChooseUs";
import UnionImg from "./assets/union.svg";
import Animation from "./components/Animation";

function App() {
  return (
    <div>
      <div className="section p-8">
        <Animation animation="fade-in-left">
          <Navbar />
        </Animation>
      </div>
      <div className="section p-8">
        <Animation animation="fade-in-bottom">
          <Main />
        </Animation>
      </div>
      <img src={UnionImg} alt="Divider" className="mt-20 w-full" />
      <Animation animation="fade-in-left">
        <MarketPlace />
      </Animation>
      <Animation animation="fade-in-bottom">
        <JasonGroove />
      </Animation>
      <Animation animation="fade-in-left">
        <Screening />
      </Animation>
      <Animation animation="fade-in-bottom">
        <ChooseUs />
      </Animation>
      <Animation animation="fade-in-left">
        <Faq />
      </Animation>
      <Footer />
    </div>
  );
}

export default App;
