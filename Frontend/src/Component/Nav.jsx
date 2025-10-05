import { NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "../assets/logo.png"; // make sure extension is correct

const Nav = () => {
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
