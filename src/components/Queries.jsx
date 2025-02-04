import "../styles/Queries.css";
import WrapIcon from "../assets/Icon wrap.png";
const Queries = () => {
  return (
    <section className="queriesSection">
      <div className="queriesHeading">
        <h1>Frequently asked questions</h1>
      </div>

      <div className="queriesPara">
        <p>
          Answers to Your Burning Questions: Unveiling the FAQ Section for
          Inquisitive Minds
        </p>
      </div>

      <div className="queriesList">
        <ul>
          <li>
            Is there a free trial available?
            <img className="WrapIcon" src={WrapIcon}></img>
          </li>
          <li>
            Can I change my plan later?{" "}
            <img className="WrapIcon" src={WrapIcon}></img>
          </li>
          <li>
            What is your cancellation policy?{" "}
            <img className="WrapIcon" src={WrapIcon}></img>
          </li>
          <li>
            Can other info be added to an invoice?{" "}
            <img className="WrapIcon" src={WrapIcon}></img>
          </li>
          <li>
            How does billing work?{" "}
            <img className="WrapIcon" src={WrapIcon}></img>
          </li>
          <li>
            How do I change my account email?{" "}
            <img className="WrapIcon" src={WrapIcon}></img>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Queries;
