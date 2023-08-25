import React, { useRef, useEffect, useState } from 'react';
import '../css/about.css';
import { useSpring, animated } from 'react-spring';

import AboutImg from '../images/L-3.jpg';
import AboutIcon from '../images/abouticon.png';
import Line from '../images/line.svg';

function CountUpAnimated({ end, isVisible }) {
    const props = useSpring({ number: isVisible ? end : 0 });

    return (
        <animated.h3>
            {props.number.interpolate(number => Math.floor(number))}
        </animated.h3>
    );
}

function About() {
    const [isVisible, setIsVisible] = useState(false);
    const targetRef = useRef(null);

    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        });
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Adjust the threshold as needed
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, []);


    return (
        <>
            <section id="about" className='about'>
                <div className='container-fluid'>
                    <div className='row'>

                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div className='about-left'>

                                <div className='year-exp'>
                                    <h1>100 Million</h1>
                                    <h2>Stock Sales</h2>
                                    <img src={Line} />
                                </div>

                                <div className='white-line'>
                                    <img src={AboutIcon} />
                                    <h3>Market Movement Weight</h3>
                                </div>

                                <img src={AboutImg} />

                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div className='about-right'>
                                <div className='small-header'>
                                    <i class="las la-grip-lines"></i>
                                    <h1>Competition Difficulty and Capital Size</h1>

                                </div>

                                <h1>
                                    This is where Qasura Company started from
                                </h1>

                                <p>
                                    To challenge the biggest barriers to entering the real estate market, which are capital and the weight of liquidity movement. The easiest way to do that is in the field of real estate leasing, which carries a high level of liquidity, accompanied by a high level of operational capability. This can only be achieved by renting entire buildings and then employing a full operational staff to manage them.
                                </p>

                                <div className='benefits-section'>

                                    <div className='left'>
                                        <ul>
                                            <li>
                                                <i class="las la-check-circle"></i>
                                                The real estate market is characterized by relatively safe and very high returns compared to other markets and fields.

                                            </li>
                                            <li>
                                                <i class="las la-check-circle"></i>
                                                As the least risky and most stable field, many investors prefer to invest their money in real estate.
                                            </li>
                                        </ul>

                                        <span className='line'></span>

                                        <div className='emerg'>
                                            <i class="las la-comments"></i>
                                            <div className='text'>
                                                <h5>Contact Us</h5>
                                                <a href="https://iwtsp.com/966530104099">
                                                    Send a Message Now <i class="lab la-whatsapp"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
