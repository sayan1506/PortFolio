import { NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "../assets/logo.png"; 
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".nav", {
    scrollTrigger: {
      trigger: ".main-content",
      start: "top",
      end: "top+=300", // optional, defines scroll range for animation
      scrub: 1,        // smooth scroll-linked motion
    },
    marginTop: "2vw",
    marginLeft: "2vw",
    marginRight: "2vw",
    width: "calc(100% - 4vw)",
    borderRadius: "5vw",
    duration: 0.3,
    ease: "power2.out",
  });
});


  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
        <NavLink to="/contacts" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
      </div>
      <div className="connect">
        <NavLink to="/connect" className={({ isActive }) => (isActive ? "active" : "")}>Let's Connect</NavLink>
      </div>
    </div>
  );
};

export default Nav;
