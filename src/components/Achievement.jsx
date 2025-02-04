import "../styles/Achievement.css";
import Group from "../assets/Group.png";
import Town from "../assets/Towns.png";
import Test from "../assets/Tests.png";

const Achievement = () => {
  return (
    <section className="achievementSection">
      <div className="achievementContainer">
        <div className="icon">
          <img className="achievementLogo" alt="image" src={Group}></img>
        </div>
        <div className="achievements">
          <p className="achievementsHeading">Registered User</p>
          <p className="achievementsCount">1000+</p>
        </div>
      </div>
      <div className="achievementContainer">
        <div className="icon">
          <img className="achievementLogo" alt="towns" src={Town}></img>
        </div>
        <div className="achievements">
          <p className="achievementsHeading">Towns And Cities</p>
          <p className="achievementsCount">600+</p>
        </div>
      </div>
      <div className="achievementContainer">
        <div className="icon">
          <img className="achievementLogo" alt="test" src={Test}></img>
        </div>
        <div className="achievements">
          <p className="achievementsHeading">Questions and test paper</p>
          <p className="achievementsCount">1000+</p>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
