import "../styles/Instruction.css";
import Hero from "../assets/OBJECTS.png";
const Instruction = () => {
  return (
    <section className="instructionSection">
      <div className="imageContainer">
        <img className="heroImage" alt=" Hero Image" src={Hero}></img>
      </div>
      <div className="instructionContainer">
        <button className="instructionButton">EXPERT INSTRUCTION</button>
        <h1 className="instructionHeading">
          Build Skills With Experts Any Time, Anywhere
        </h1>
        <p className="instructionpara">
          We invest in personnel, technological innovations and infrastructure
          and have established regional and international offices.
        </p>
      </div>
    </section>
  );
};

export default Instruction;
