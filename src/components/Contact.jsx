import "../styles/Contact.css";
import ContactIcon from "../assets/contact.png";
const Contact = () => {
  return (
    <section className="contactSection">
      <div className="contactImage">
        <img className="imageContact" src={ContactIcon} alt="image"></img>
      </div>
      <div className="ContactForm">
        <form className="contact">
          <button className="contactButton">Get in Touch with US?</button>
          <h1>Call us on our number</h1>
          <p>+91 9701924456</p>
          <label>Full Name</label>
          <input placeholder="Shaik Ahmad Aslam" type="text"></input>

          <label>Email</label>
          <input placeholder="shaikahmadaslam@gmail.com" type="email"></input>

          <label>Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            placeholder="Enter your message here..."
          ></textarea>

          <button className="enquiryButton">Enquiry</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
