import './css/landing.css';

import LandingImg1 from './images/L-1.jpg';
import LandingImg2 from './images/L-2.jpg';
import LandingImg3 from './images/L-3.jpg';
import LandingImg4 from './images/L-4.jpg';


import {Swiper,SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Autoplay,Navigation} from 'swiper';



function Landing(){
    return(
        <>
            <section id='home' className='landing'>
                <div className='landing-header'>
                    <h1> شركة <span> قسورة </span> للاستثمار العقاري  </h1>

                    <div className='right'>
                        <h2> تقوم الشركة بخدمة العملاء عن بعد والإجابة على اسئلتهم  </h2>
                        <a href='https://iwtsp.com/966530104099'>
                            تواصل معنا
                        </a>
                    </div>
                </div>

                <div className='buttons'>
                    <button className='next-btn'>
                        <i class="las la-caret-right"></i>
                    </button>

                    <button className='prev-btn'>
                        <i class="las la-caret-left"></i>
                    </button>
                </div>


                <div className='landing-content'>
                    

                <Swiper grabCursor={true} spaceBetween={50} slidesPerView={1}  navigation={{
                    nextEl: '.next-btn',
                    prevEl: '.prev-btn',
                    }} autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay,Navigation]}>

                    <SwiperSlide>
                        <img src={LandingImg4}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={LandingImg3}/>
                    </SwiperSlide>



                    <SwiperSlide>
                        <img src={LandingImg2}/>
                    </SwiperSlide>

                    </Swiper>
                </div>

                <div className='landing-text'>  
                    <span> حجم السوق </span>

                    <div className='right'> 
                        <h1> السياحة في المملكة </h1>
                        <h2>  من أهداف المملكة 2030 </h2>
                    </div>

                    <div className='left'>
                        <div className='icon-text'>
                            <i class="las la-hand-holding-usd"></i>
                            <div className='text'> 
                                <h3> مصاريف سياحية </h3>
                                <h4> 147 مليار </h4>
                            </div>
                        </div>

                        <div className='icon-text'>
                            <i class="las la-users"></i>
                            <div className='text'> 
                                <h3> زائر سنويا </h3>
                                <h4> 100 مليون </h4>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing;