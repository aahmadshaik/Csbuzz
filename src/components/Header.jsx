import "../styles/Header.css";
import Logo from "../assets/Logo.png";
import loginLogo from "../assets/login.png";
import { useState } from "react";
const Header = () => {
  const courses = [
    "Trending Now",
    "HTML",
    "CSS",
    "Java Script",
    "Python",
    "Bootstrap",
    "Java",
    "C",
    "C++",
    "React Js",
    "Node Js",
    "Web Development",
    "Test",
  ];

  // State to keep track of the current course index
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <header className="header">
      <nav className="navBar">
        <div className="logo-container">
          <img className="companyLogo" src={Logo} alt="logo"></img>
        </div>
        <div className="search-container">
          <input
            className="searchBar"
            type="search"
            placeholder="Search here"
          />
        </div>

        <div className="navList">
          <ul className="listItems">
            <li>Home</li>
            <li>Olympiad</li>
            <li>CBSE</li>
            <li>CUET</li>
          </ul>
        </div>

        <div className="login-container">
          <button className="loginButton">
            Login
            <img className="loginLogo" src={loginLogo}></img>
          </button>
        </div>
      </nav>
      <div className="carousel-container">
        <div className="carousel">
          {/* Previous Button */}
          <button
            className="prev-btn"
            onClick={() =>
              setCurrentIndex(
                (prevIndex) => (prevIndex - 1 + courses.length) % courses.length
              )
            }
          >
            &#8249; {/* Left arrow */}
          </button>

          {/* Display the list of courses */}
          <ul className="listCourse">
            {courses.map((course, index) => (
              <li className="course-card" key={index}>
                {course}
              </li>
            ))}
          </ul>

          {/* Next Button */}
          <button
            className="next-btn"
            onClick={() =>
              setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length)
            }
          >
            &#8250; {/* Right arrow */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
