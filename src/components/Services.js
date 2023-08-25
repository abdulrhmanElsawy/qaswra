import  './css/services.css';



import services1 from './images/service-1.jpg';
import services2 from './images/service-2.jpg';
import services3 from './images/service-3.jpg';



import {Swiper,SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';

import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Autoplay,EffectCube,EffectCoverflow,Navigation,Pagination} from 'swiper';
import SectionHeader from './SectionHeader';


function Services(){
    return(
        <>
            <SectionHeader secheader="شركة قسورة العقارية" header=" خدمات شركة قسورة " />
            <section id="services" className='services'>
                <div className='container-fluid'>
                    <div className='services-content'>


                    <Swiper  grabCursor={true} slidesPerView={'auto'} navigation={{
                        nextEl: '.next-btn',
                        prevEl: '.prev-btn',
                        }} pagination={true}
                        // autoplay={{
                        //     delay: 4000,
                        //     disableOnInteraction: false,
                        // }}
                        modules={[Autoplay,EffectCoverflow,EffectCube,Navigation,Pagination]}
                        >
                            <SwiperSlide>
                                <div className='service'>
                                    <img  src={services1}/>
                                    <div className='text'>


                                        <div className='top'>
                                            <div className='left'>
                                                <i class="las la-file-invoice-dollar"></i>
                                            </div>

                                            <div className='right'>
                                                <h1> استثمار عقاري تأجيري </h1>
                                            </div>
                                        </div>

                                        <p>
                                        نقوم باستثمار رأس مالك في موقع من اختيارك ابتداءً من شقة واحدة عبر تأسيس العقار للتأجير والتفاوض في الأسعار والتعاقد مع المؤجر, وصوق التأجيري وتوزيع الأرباح بشكل شهري أو ربعي  </p>

                                        <a href='https://iwtsp.com/966530104099'> 
                                            تواصل معنا <i class="las la-arrow-right"></i>
                                        </a>


                                    </div>
                                </div>


                                </SwiperSlide>


                                <SwiperSlide>

                                <div className='service'>
                                    <img  src={services3}/>
                                    <div className='text'>


                                        <div className='top'>
                                            <div className='left'>
                                                <i class="las la-tasks"></i>
                                            </div>

                                            <div className='right'>
                                                <h1> استشارات استثمارية للعقار التأجيري </h1>
                                            </div>
                                        </div>

                                        <p>
                                        تشمل هذه الخدمة تقييم الأوضاع المالية لمشروعك التأجيري ودراسة التكاليف والربحية والعمليات التشغيلية ومقارنتها بالعوائد المتوقعة في حال الانتقال لنموذج عمل أكثر مرونة                                        </p>

                                        <a href='https://iwtsp.com/966530104099'> 
                                            تواصل معنا <i class="las la-arrow-right"></i>
                                        </a>


                                    </div>
                                </div>

                                </SwiperSlide>


                                <SwiperSlide>


                                <div className='service'>
                                    <img  src={services2}/>
                                    <div className='text'>


                                        <div className='top'>
                                            <div className='left'>
                                                <i class="las la-home"></i>
                                            </div>

                                            <div className='right'>
                                                <h1> عقارك مصدر استثمارك </h1>
                                            </div>
                                        </div>

                                        <p>
                                        في حال وجود عقار جاهز لديك وترغب بعوائد أعلى من التأجير التقليدي يمكن استثمار عقارك الخاص في التأجير الاستثماري عبر تجهيز العقار وتأثيثه للوصول لأكبر قيمة استثمارية ممكنة للعقار
                                        </p>

                                        <a href='https://iwtsp.com/966530104099'> 
                                            تواصل معنا <i class="las la-arrow-right"></i>
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