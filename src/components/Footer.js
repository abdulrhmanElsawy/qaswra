import './css/footer.css';
import Logo from './images/logo.png';



function Footer(){
    return(
        <>
            <footer>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                            
                            <div className='footer-content'>
                                <div className='logo'>
                                    <img src={Logo} />
                                </div>

                                <p>
                                تعتزم قسورة العمل على زيادة الدخل للعقار
عن طريق التأجير قصير ومتوسط المدى بدل التأجير طويل المدى
 بالتالي زيادة القيمة العقارية للمبنى
<br/>
تستهدف قسورة زيادة الدخل من متوسط %7-6 وحتى %20-15 عائد
على العقار
<br/>
زيادة الدخل = زيادة القيمة بنفس المضاعف
                                </p>


                            </div>
                            
                        </div>

                        <div className='col-lg-2 col-md-2 col-sm-12 col-12'>
                            
                            <div className='footer-content'>
                                <ul> 
                                <li>
                                    <a className='active' href='#'>
                                        الرئيسية
                                    </a>
                                </li>

                                <li>
                                    <a href='#'>
                                        عن الشركة
                                    </a>
                                </li>


                                <li>
                                    <a href='#'>
                                        الخدمات
                                    </a>
                                </li>

                                <li>
                                    <a href='#'>
                                        تواصل معنا
                                    </a>
                                </li>

                                </ul>

                                
                            </div>
                            
                        </div>


                        <div className='col-lg-7 col-md-7 col-sm-12 col-12'>
                            <div className='footer-content'>
                                <div className='social'>
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

                                <div className='contact-us-text'>
                                    <h3> +966 530 104 099 </h3>
                                    <a href="https://iwtsp.com/966530104099"> راسلنا </a>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                            <div className='footer-content-down'>
                                <h4> تحتاج الى المساعدة ؟ </h4>
                                <div className='contact-ele'>
                                    <a href="tel:966530104099">
                                    <i class="las la-headphones"></i>
                                        + 966 530 104 099</a>

                                    <a href="https://iwtsp.com/966530104099">
                                    <i class="lab la-whatsapp"></i>
                                        + 966 530 104 099
                                    </a>

                                    <a href="#">
                                        <i class="las la-envelope"></i>
                                        info@qaswra.com
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className='col-lg-7 col-md-7 col-sm-12 col-12'>
                            <div className='footer-content'>
                                <div className='copy-right'>
                                    <h3> &copy; 2023. All rights reserved to <span> Qaswra </span> </h3>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;