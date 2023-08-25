import React from 'react';
import '../css/services.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectCube, EffectCoverflow, Navigation, Pagination } from 'swiper';
import SectionHeader from '../SectionHeader';
import services1 from '../images/service-1.jpg';
import services2 from '../images/service-2.jpg';
import services3 from '../images/service-3.jpg';

function Services() {
    return (
        <>
            <SectionHeader secheader="Qaswra Real Estate Company" header="Qaswra Company Services" />
            <section id="services" className='services'>
                <div className='container-fluid'>
                    <div className='services-content'>
                        <Swiper grabCursor={true} slidesPerView={'auto'} navigation={{
                            nextEl: '.next-btn',
                            prevEl: '.prev-btn',
                        }} pagination={true}
                        // autoplay={{
                        //     delay: 4000,
                        //     disableOnInteraction: false,
                        // }}
                        modules={[Autoplay, EffectCoverflow, EffectCube, Navigation, Pagination]}
                        >
                            <SwiperSlide>
                                <div className='service'>
                                    <img src={services1} alt='Service 1' />
                                    <div className='text'>
                                        <div className='top'>
                                            <div className='left'>
                                                <i className="las la-file-invoice-dollar"></i>
                                            </div>
                                            <div className='right'>
                                                <h1> Rental Real Estate Investment </h1>
                                            </div>
                                        </div>
                                        <p>
                                            We invest your capital in a location of your choice, starting with a single apartment, by establishing the property for rent, negotiating prices, contracting with the lessor, and structuring the rental, distributing profits on a monthly or quarterly basis.
                                        </p>
                                        <a href='https://iwtsp.com/966530104099'>
                                            Contact us <i className="las la-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='service'>
                                    <img src={services3} alt='Service 3' />
                                    <div className='text'>
                                        <div className='top'>
                                            <div className='left'>
                                                <i className="las la-tasks"></i>
                                            </div>
                                            <div className='right'>
                                                <h1> Real Estate Investment Consultations for Rentals </h1>
                                            </div>
                                        </div>
                                        <p>
                                            This service includes evaluating the financial conditions of your rental project, studying costs, profitability, operational processes, and comparing them to expected returns when transitioning to a more flexible business model.
                                        </p>
                                        <a href='https://iwtsp.com/966530104099'>
                                            Contact us <i className="las la-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='service'>
                                    <img src={services2} alt='Service 2' />
                                    <div className='text'>
                                        <div className='top'>
                                            <div className='left'>
                                                <i className="las la-home"></i>
                                            </div>
                                            <div className='right'>
                                                <h1> Your Property is Your Investment Source </h1>
                                            </div>
                                        </div>
                                        <p>
                                            If you have a ready property and want higher returns than traditional renting, you can invest your property in investment rental by preparing and furnishing the property to achieve the highest possible investment value for the property.
                                        </p>
                                        <a href='https://iwtsp.com/966530104099'>
                                            Contact us <i className="las la-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;
