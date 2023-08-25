import '../css/footer.css';
import Logo from '../images/logo.png';

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
                                    Qaswra aims to increase property income through short and medium-term leasing instead of long-term leasing, thereby increasing the property value of the building. Qaswra targets income increase ranging from 6% to 20%, yielding on the property.
                                    <br/>
                                    Income Increase = Value Increase by the Same Multiple
                                </p>
                            </div>
                        </div>

                        <div className='col-lg-2 col-md-2 col-sm-12 col-12'>
                            <div className='footer-content'>
                                <ul>
                                    <li>
                                        <a className='active' href='#'>
                                            Home
                                        </a>
                                    </li>

                                    <li>
                                        <a href='#'>
                                            About Us
                                        </a>
                                    </li>

                                    <li>
                                        <a href='#'>
                                            Services
                                        </a>
                                    </li>

                                    <li>
                                        <a href='#'>
                                            Contact Us
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
                                    <a href="https://iwtsp.com/966530104099">Contact Us</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                            <div className='footer-content-down'>
                                <h4>Need Assistance?</h4>
                                <div className='contact-ele'>
                                    <a href="tel:966530104099">
                                        <i class="las la-headphones"></i>
                                        +966 530 104 099
                                    </a>

                                    <a href="https://iwtsp.com/966530104099">
                                        <i class="lab la-whatsapp"></i>
                                        +966 530 104 099
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
                                    <h3>&copy; 2023. All rights reserved to <span>Qaswra</span></h3>
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
