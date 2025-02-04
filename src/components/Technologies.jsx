import "../styles/Technologies.css";
import ReactLogo from "../assets/reactLogo.png";
import PythonLogo from "../assets/pythonLogo.png";
import CssLogo from "../assets/cssLogo.png";
import JsLogo from "../assets/JavaScriptLogo.png";
import HtmlLogo from "../assets/htmlLogo.png";

const Technologies = () => {
  const technologies = [
    {
      id: 1,
      name: "HTML",
      icon: HtmlLogo,
    },
    {
      id: 2,
      name: "CSS",
      icon: CssLogo,
    },
    {
      id: 3,
      name: "JavaScript",
      icon: JsLogo,
    },
    {
      id: 4,
      name: "Python",
      icon: PythonLogo,
    },
    {
      id: 5,
      name: "React",
      icon: ReactLogo,
    },
  ];

  const list = technologies.map((item) => (
    <li key={item.id}>
      <img src={item.icon} alt={item.name} width="51" height="58" />

      {item.name}
    </li>
  ));

  return (
    <section className="technologiesSection">
      <h1 className="technologiesHeading">Trending Technologies</h1>
      <ul>{list}</ul>
    </section>
  );
};

export default Technologies;
