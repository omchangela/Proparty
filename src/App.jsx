import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainImage from './components/MainImage';
import OurServices from './components/OurServices';
import OurProjects from './components/OurProjects';
import ConstructionPackages from './components/ConstructionPackages';


function App() {

  return (
    <>
      <CustomNavbar />
      <MainImage />
      <OurServices />
      <OurProjects />
      <ConstructionPackages />
    </>
  )
}

export default App
