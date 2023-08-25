import './App.css';
import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Vision from './components/Vision';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';


import NavbarEN from './components/en/Navbar';
import LandingEN from './components/en/Landing';
import AboutEN from './components/en/About';
import VisionEN from './components/en/Vision';
import ServicesEN from './components/en/Services';
import BenefitsEN from './components/en/Benefits';
import ContactEN from './components/en/Contact';
import FooterEN from './components/en/Footer';


function App() {

return (
    <div className="App">

                            <Navbar />
                            <Landing />
                            <About />
                            <Vision />
                            <Services />
                            <Benefits />
                            <Contact />
                            <Footer />


            <Routes>

                
                <Route path="/" element={
                        <>
                            <Navbar />
                            <Landing />
                            <About />
                            <Vision />
                            <Services />
                            <Benefits />
                            <Contact />
                            <Footer />

                        </>
                    } />

                
                <Route path="/en" element={
                        <>
                            <NavbarEN />
                            <LandingEN />
                            <AboutEN />
                            <VisionEN />
                            <ServicesEN />
                            <BenefitsEN />
                            <ContactEN />
                            <FooterEN />

                        </>
                    } />

        </Routes>

    </div>
);
}

export default App;
