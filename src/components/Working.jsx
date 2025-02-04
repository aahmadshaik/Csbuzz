import "../styles/Working.css";
import WorkingImage from "../assets/Working.png";
import CssLogo from "../assets/cssLogo.png";
import JsLogo from "../assets/JavaScriptLogo.png";
import HtmlLogo from "../assets/htmlLogo.png";
import Java from "../assets/Java.png";
import Bootstrap from "../assets/Bootstrap.png";
import Php from "../assets/Php.png";
import Group from "../assets/GroupPic.png";
const Working = () => {
  const technologies = [
    {
      id: 1,
      icon: HtmlLogo,
      name: "HTML",
      background: "#FFD6CC",
      data: "Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance",
    },
    {
      id: 2,
      icon: CssLogo,
      name: "CSS",
      background: "#B6C5FF",

      data: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).",
    },
    {
      id: 3,
      icon: JsLogo,
      name: "JavaScript",
      background: "#FFF8D5",

      data: "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[11] It has dynamic typing, prototype-based object-orientation, and first-class functions.",
    },
    {
      id: 4,
      icon: Java,
      name: "Java",
      background: "#FFE6CF",

      data: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    },
    {
      id: 5,
      icon: Bootstrap,
      name: "Bootstrap",
      background: "#EDE0FF",

      data: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
    },
    {
      id: 6,
      icon: Php,
      name: "PHP",
      background: "#E8E9FF",

      data: "PHP is a recursive acronym for 'PHP: Hypertext Preprocessor'. It is a server-side scripting language that is embedded in HTML. PHP is used to manage dynamic content, databases, session tracking, and even build entire e-commerce sites.",
    },
  ];
  return (
    <section className="workingSection">
      <div className="workingContainer">
        <div className="workContainer">
          <h1 className="workContainerHeading">How It Works</h1>
          <p className="workContainerPara">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>
        </div>

        <div className="workingSteps">
          <img className="workingStepsImage" src={WorkingImage}></img>
        </div>

        <div className="technologies-container">
          {technologies.map((tech) => (
            <div className="technologies" key={tech.id}>
              <div
                className="technologiesImageBg"
                style={{ backgroundColor: tech.background }}
              >
                <img
                  className="technologiesImage"
                  src={tech.icon}
                  alt={tech.name}
                  style={{ backgroundColor: tech.background }}
                />
              </div>
              <div className="technologiesData">
                <h1 className="technologiesHeading">{tech.name}</h1>
                <p className="technologiesPara">{tech.data}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="moreInfo">
          <div className="moreImageContainer">
            <img className="moreInfoImage" src={Group} alt="photo"></img>
          </div>

          <div className="moreData">
            <button className="categoriesButton">Top Categories</button>
            <h1 className="categoriesHeading">Career Development</h1>
            <p className="categoriesPara">
              Not all changes in an organisation are welcome and even the best
              ones are not always easy. This is why many employers put a high
              value on executives able to lead well under pressure.
            </p>
            <button className="categoriesMore">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
