import portrait from "../images/temp.png";
import Buttons from "./Buttons.js";

function Info() {
  return (
    <div>
      <img src={portrait} alt="portrait of Knut C" className="main--big-image" />
      <div className="main--content-container">
        <h1 className="main--big-title">Knut C</h1>
        <h3 className="main--subheader">Frontend Developer</h3>
        <p className="main--small">knutc.website</p>
        <Buttons />
      </div>
    </div>
  );
}

export default Info;
