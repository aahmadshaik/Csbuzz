import "../styles/Testimonial.css";
import Testimonials from "../assets/Testimonial.png";
export const Testimonial = () => {
  return (
    <div className="testimonialSection">
      <img className="testimonialImage" src={Testimonials}></img>
    </div>
  );
};
export default Testimonial;
