
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import Home from './Components/Menu/Home/Home';
import Contact from './Components/Menu/Contact/Contact';
import About from './Components/Menu/About/About';
import MenuBar from './Components/Menu/MenuBar/MenuBar';
import Footer from './Components/Menu/Footer/Footer';
import ProjectManagement from './Components/Menu/ProjectsPages/ProjectManagement';
import AssestManagement from './Components/Menu/ProjectsPages/AssestManagement';
import DrillingServices from './Components/Menu/ProjectsPages/DrillingServices';
import IntegratedSupport from './Components/Menu/ProjectsPages/IntegratedSupport';
import OilFieldSupplies from './Components/Menu/ProjectsPages/OilFieldSupplies';


function App() {
  return (
    <>
    <div className='body-bg-image-old'>
     <BrowserRouter>
     <div>
      <MenuBar/>
     </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/project-management" element={<ProjectManagement />} />
          <Route path="/assest-management" element={<AssestManagement />} />
          <Route path="/drilling-services" element={<DrillingServices />} />
          <Route path="/integrated-support" element={<IntegratedSupport />} />
          <Route path="/oil-Field-supplies" element={<OilFieldSupplies />} />
          
          
          <Route path="/menubar" element={<MenuBar />} />
        </Routes>

    </BrowserRouter>
     {/* <Footer /> */}
    </div>
    </>
  );
}

export default App;
