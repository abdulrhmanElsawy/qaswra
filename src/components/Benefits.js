import './css/benefits.css';

import Benefit from './images/L-2.jpg';

function Benefits(){
    return(
        <>
            <section className='benefits-section'>
                <div className='container-fluid'>
                    <div className='row'>

                        
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div className='benefits-img'>
                                <img src={Benefit} />
                                <div className='text'>
                                    <h1> 1455 + </h1>
                                    <h3> مشاريع مكتملة </h3>
                                </div>
                            </div>
                        </div>


                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div className='benefits-text'>
                                <div className='sec-header'>
                                    <i class="las la-align-right"></i>
                                    <h2> التأجير طويل المدى </h2>
                                </div>

                                <h1> لماذا استثمار العقار بدل التأجير طويل المدى </h1>

                                <h2> مميزات التأجير قصير المدى </h2>

                                <ul> 
                                    <li>
                                        <i class="las la-dot-circle"></i>
                                        الدخل العالي، يقدر دخل الشقة الواحدة في الموقع ما يعادل 6 أضعاف الدخل للتأجير طويل المدى
                                    </li>

                                    <li>
                                    <i class="las la-dot-circle"></i>
                                    التكلفة التشغيلية قليلة ويحسب من ضمنها تكلفة الصيانة الدورية للعقار والتنظيف والعناية الدائمة بعد خروج كل مستأجر، بالتالي تحافظ على قيمة العقار وملحقاته
                                    </li>

                                    <li>
                                    <i class="las la-dot-circle"></i>
                                    تتكفل الشركة بكافة الأعمال الإدارية والتشغيلية والقانونية والتسويقية وتقوم بتقديم تقرير ربعي لأداء العقار مع صافي الدخل والأرباح والتوزيعات النقدية
                                    </li>

                                    <li>
                                    <i class="las la-dot-circle"></i>
                                        تكون الصيغة التعاقدية بالشراكة ويمتلك كل عقار سجل تجاري خاص فيه ويستلم رأس المال شركة محاماة وسيطة لتضعه في حساب منفصل خاص بالعقار ويتم عمل تدقيق سنوي مالي من قبل أحد المكاتب المالية المعتمدة لدى هيئة الزكاة والدخل
                                    </li>

                                    <li>
                                    <i class="las la-dot-circle"></i>
                                    الحي متكامل الخدمات ويقع العقار على شارع رئيسي حيوي وعلى مقربة من محطة القطار واستاد الملك فهد مما سيرفع الإشغال في أوقات الذروة
                                    </li>
                                </ul>

                                <div className='benefits'>


                                    <div className='benefit'>
                                    <i class="las la-chart-line"></i>
                                        <h3> إدارة الأملاك بهدف زيادة القيمة والبيع </h3>
                                        <p>
                                            تقوم قسورة بإدارة الأملاك بهدف زيادة قيمة العقار وبيعه كمشروع عقاري بدل أن يكون مبنى عقاري ومن شأن ذلك أن يزيد في القيمة السوقية بشكل كبير
                                        </p>
                                    </div>


                                    
                                    <div className='benefit'>
                                        <i class="las la-headset"></i>
                                        <h3> خدمة العملاء </h3>
                                        <p>
                                            تقوم الشركة بخدمة العملاء عن بعد والإجابة على اسئلتهم واستفساراتهم على مدار اليوم 24/7 بالإضافة لوجود مشرفين في كل مدينة للقيام بالإصلاحات اللازمة إن وجدت
                                        </p>
                                    </div>


                                    
                                    
                                    <div className='benefit'>
                                        <i class="las la-link"></i>
                                        <h3>التسويق عبر المنصات </h3>
                                        <p>
                                        سيتم التأجير من خلال جميع منصات التأجير المتعارف عليها في المملكة وربط جميع المنصات بنظام الإدارة المركزي الخاص بالشركة
                                        </p>
                                    </div>


                                </div>


                                <div className='customer-bar'>
                                    <div className='text'>
                                        <h2> عملاء سعداء  </h2>

                                        <span> 98% </span>
                                    </div>

                                    <div className='bar'>
                                        <div className='bar-value'></div>
                                    </div>


                                </div>


                                <div className='contact'>
                                    <a href='https://iwtsp.com/966530104099'>
                                        أرسل رسالة 
                                        <i class="lab la-whatsapp"></i>
                                    </a>

                                    <div className='call'>
                                    <i class="las la-phone-volume"></i>

                                        <div className='text'>
                                            <h5> إتصل بنا  </h5>
                                            <a href="https://iwtsp.com/966530104099">
                                                + 966 530 104 099
                                            </a>
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

export default Benefits;