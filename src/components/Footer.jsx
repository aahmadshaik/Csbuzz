import "../styles/Footer.css";
import Logo from "../assets/Logo.png";
import { Twitter, Facebook, Instagram, Github } from "lucide-react";
export default function Home() {
  return (
    <main>
      <section className="feedback-section">
        <h2>Add Valuable Feedback</h2>
        <button className="feedback-button">Add Feedback</button>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">
              <img src={Logo} alt="CS Buzz Logo" width={120} height={40} />
            </div>
            <h3>About CS Buzz</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
              sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>
          </div>

          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Help</h3>
            <ul>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Resources</h3>
            <ul>
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Nullam dictum aliquet accumsan porta lectus ridiculus in mattis.
            Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
          </p>
          <div className="social-links">
            <Twitter size={20} />

            <Facebook size={20} />

            <Instagram size={20} />

            <Github size={20} />
          </div>
        </div>
      </footer>
    </main>
  );
}
