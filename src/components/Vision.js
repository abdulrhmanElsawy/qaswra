import './css/vision.css';

import goal from './images/icons/goal_150275.png';
import vision from './images/icons/vision_2421304.png';
import diamond from './images/icons/diamond_576685.png';

function Vision(){
    return(
        <>
            <section className='visions'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                            <div className='vision'>
                                <div className='header'>
                                    <img src={vision} />
                                    <h1> الرؤية </h1>
                                </div>

                                <p> تبسيط الاستثمار العقاري للجميع </p>
                            </div>
                        </div>


                        <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                            <div className='vision'>
                                <div className='header'>
                                    <img src={goal} />
                                    <h1> الرسالة </h1>
                                </div>

                                <p> عبر تسهيل إجراءات الاستثمار العقاري وتقليل رأس المال المطلوب للدخول وزيادة العوائد لأقصى حدودها </p>
                            </div>
                        </div>



                        <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                            <div className='vision'>
                                <div className='header'>
                                    <img src={diamond} />
                                    <h1> قيمها </h1>
                                </div>

                                <p> الأتمتة البساطة الابتكار </p>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Vision;