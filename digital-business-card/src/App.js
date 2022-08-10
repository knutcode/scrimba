// import  from "./components/
import Info from "./components/Info.js";
import About from "./components/About.js";
import Interests from "./components/Interests.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="app--container">
      <Info />
      <div className="about--container">
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  );
}

export default App;
