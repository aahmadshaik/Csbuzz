import "../styles/Features.css";
import Study from "../assets/Degree.png";
import Feature from "../assets/Feature.png";
const Features = () => {
  return (
    <section className="featuresSection">
      <h1 className="featuresHeading">Features</h1>
      <p className="featuresPara">
        We invest in personnel, technological innovations and infrastructure and
        have established regional and international offices.
      </p>
      <div className="featuresBox">
        <div className="fContainer">
          <ul>
            <li>
              <img className="listLogo" src={Study}></img>Study Material{" "}
            </li>
            <li>
              <img className="listLogo" src={Study}></img>Question Bank{" "}
            </li>
            <li>
              <img className="listLogo" src={Study}></img>Test Series{" "}
            </li>
            <li>
              <img className="listLogo" src={Study}></img>Previous Solved Papers{" "}
            </li>
            <li>
              <img className="listLogo" src={Study}></img>Leaderboard
            </li>
          </ul>
        </div>
        <div>
          <img className="fImage" src={Feature} alt="Image" />
        </div>
      </div>
    </section>
  );
};

export default Features;
