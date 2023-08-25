import React, { useState, useEffect } from 'react';
import './css/navbar.css';
import Logo from './images/logo.png';
import $ from 'jquery';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {

    
    
    useEffect(() => {
        $("#open-nav").on("click", function() {
            $(".nav-elements").slideDown(400);
            $(".nav-elements").css({display: "flex"});
        });

        $("#close-nav").on("click", function() {
            $(".nav-elements").slideUp(400);
        });

        if ($(window).width() < 950) {
            $(".nav-elements ul li").on("click", function() {
                $(".nav-elements").slideUp(400);
            });
        }
    const loadingElement = document.getElementById("loading");
    if (loadingElement) {
        loadingElement.remove();
    }
    }, []);



const [activeSection, setActiveSection] = useState('home');
const [isNavbarFixed, setIsNavbarFixed] = useState(false);

useEffect(() => {
    const handleScroll = () => {
    const sections = ['home', 'about', 'services', 'contact'];
    for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(sectionId);
            break;
        }
        }
    }

    // Check if the user has scrolled down enough to fix the navbar
    setIsNavbarFixed(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
    window.removeEventListener('scroll', handleScroll);
    };
}, []);

const handleNavLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
    }
};

    return(
        <>
            <nav className={isNavbarFixed ? 'fixed' : ''}>
                <div className='container-fluid'>
                    <div className='nav-content'>
                        <div className='logo'>
                            <img src={Logo} />
                        </div>

                        
                        <button id="open-nav"> <i className="las la-bars"></i> </button>
                        <div className="nav-elements">
                        <button id="close-nav"> <i className="las la-times"></i> </button>
                        <ul>
                            <li>
                                <a className={activeSection === 'home' ? 'active' : ''} onClick={() => handleNavLinkClick('home')}>
                                الرئيسية
                                </a>
                            </li>
                            <li>
                                <a className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavLinkClick('about')}>
                                عن الشركة
                                </a>
                            </li>
                            <li>
                                <a className={activeSection === 'services' ? 'active' : ''} onClick={() => handleNavLinkClick('services')}>
                                الخدمات
                                </a>
                            </li>
                            <li>
                                <a className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleNavLinkClick('contact')}>
                                تواصل معنا
                                </a>
                            </li>

                            <li>
                                <RouterLink to="/en">
                                    EN
                                </RouterLink>
                            </li>
                            </ul>

                            <div className='social-media'>
                                <div className='links'>
                                    <a href="#">
                                        <i class="lab la-facebook"></i>
                                    </a>

                                    <a href="#">
                                        <i class="lab la-twitter"></i>
                                    </a>

                                    <a href="#">
                                        <i class="lab la-instagram"></i>
                                    </a>

                                    <a href="#">
                                    <i class="lab la-linkedin-in"></i>
                                    </a>
                                </div>

                                <div className='contact'>
                                    <a href="tel:966530104099">
                                        <i class="las la-phone-volume"></i>
                                        +966 530 104 099

                                    </a>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;