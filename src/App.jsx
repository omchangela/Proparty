import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainImage from './components/MainImage';
import OurServices from './components/OurServices';
import OurProjects from './components/OurProjects';
import ConstructionPackages from './components/ConstructionPackages';
import ProjectDetails from './components/ProjectDetails'; // Ensure you import this component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<MainImage />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/packages" element={<ConstructionPackages />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/about" element={<About/>} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
