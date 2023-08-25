import React, { useRef, useEffect, useState } from 'react';
import './css/about.css';
import { useSpring, animated } from 'react-spring';

import AboutImg from './images/L-3.jpg';
import AboutIcon from './images/abouticon.png';
import Line from './images/line.svg';

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


    return(
        <>
        <section id="about" className='about'>
            <div className='container-fluid'>
                <div className='row'>



                    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                        <div className='about-left'>

                            
                            <div className='year-exp'>
                                <h1> 100 مليون </h1>
                                <h2>بيع أسهم  </h2>
                                <img  src={Line}/>
                            </div>

                            <div className='white-line'>
                                    <img src={AboutIcon}/>
                                    <h3>  ثقل حركة السوق </h3>
                            </div>

                            <img  src={AboutImg}/>

                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                        <div className='about-right'>
                            <div className='small-header'>
                                <i class="las la-grip-lines"></i>
                                    <h1> صعوبة المنافسة فيه وكبر حجم رؤس الأموال  </h1>

                            </div>
                            
                            <h1> 
                            من هنا انطلقت شركة قسورة


                            </h1>

                            <p>
                            لتحدي أكبر عوائق دخول السوق العقاري وهي رأس المال وثقل حركة السيولة وأسهل ما يكون ذلك في مجال التأجير العقاري والذي يحمل قدر عالي من السيولة والتي يصاحبها قدر عالي من القدرة التشغيلية ولا يمكن عمل ذلك إلا عن طريق استئجار مباني بأكملها ومن ثم توظيف طاقم تشغيلي كامل لإدارتها 

                            </p>

                            <div className='benefits-section'>


                                <div className='left'>
                                    <ul>
                                        <li>
                                            <i class="las la-check-circle"></i>
                                            تميز السوق العقاري بعوائد آمنة نسبياً وعالية جداً مقارنة بالأسواق والمجالات الأخرى

                                        </li>
                                        <li>
                                            <i class="las la-check-circle"></i>
                                            وكونه المجال الأقل خطورة والأكثر ثباتاً يفضل الكثير من المستثمرين صرف أموالهم في الاستثمار العقاري
                                        </li>
                                    </ul>

                                    <span className='line'></span>

                                    <div className='emerg'>
                                        <i class="las la-comments"></i>
                                        <div className='text'>
                                            <h5> تواصل معنا </h5>
                                            <a href="https://iwtsp.com/966530104099">
                                                أرسل رسالة الان <i class="lab la-whatsapp"></i>
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