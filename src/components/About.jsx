import "../styles/About.css";
const About = () => {
  return (
    <section className="aboutSection">
      <div className="about">
        <button className="aboutButton">Who we are</button>
        <h1 className="aboutHeading">
          India&#39;s Largest Online Preparation Platform for Olympiad Exams
        </h1>
        <p className="aboutPara">
          Our preparation platform helps in Olympiad exam excellence through
          comprehensive practice and mock test papers. It consists of more than
          3,00,000 questions, provides extensive practice to students to handle
          difficult and tricky questions that come in various Olympiads.
          Moreover, you receive continuous feedback of your child's performance.
          It's an initiative by graduates from Indian Institute of Technology
          (IITs) and top universities in US to create personalised and in-depth
          online learning experience.
        </p>

        <button className="aboutReadMore ">Read More</button>
      </div>
    </section>
  );
};

export default About;
