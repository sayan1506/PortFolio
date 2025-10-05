import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Nav';
import Project from './Pages/Project';
import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Connect from './Pages/Connect';
import "./App.css"
const App = () => {
  return (
    <div>
      <div className="App">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="/connect" element={<Connect />} />
            
            
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
