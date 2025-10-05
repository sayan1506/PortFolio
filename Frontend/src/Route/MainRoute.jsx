import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Project from "../Pages/Project";
import Contact from "../Pages/Contacts";
import About from "../Pages/About";
import Connect from "../Pages/Connect";


const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={< Project/>} />
      <Route path="/contacts" element={< Contact/>} />

      <Route path="/connect" element={< Connect/>} />
      <Route path="/about" element={< About/>} />
    </Routes>
  );
};

export default MainRoute;