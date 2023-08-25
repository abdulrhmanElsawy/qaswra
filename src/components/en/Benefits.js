import '../css/benefits.css';

import Benefit from '../images/L-2.jpg';

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
                                    <h1>1455+</h1>
                                    <h3>Completed Projects</h3>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div className='benefits-text'>
                                <div className='sec-header'>
                                    <i class="las la-align-right"></i>
                                    <h2>Long-Term Leasing</h2>
                                </div>

                                <h1>Why Real Estate Investment Instead of Long-Term Leasing?</h1>

                                <h2>Advantages of Short-Term Leasing</h2>

                                <ul> 
                                    <li>
                                        <i class="las la-dot-circle"></i>
                                        High income; the income from a single apartment at the location is equivalent to 6 times the income from long-term leasing.
                                    </li>

                                    <li>
                                        <i class="las la-dot-circle"></i>
                                        Low operating costs, including regular maintenance, cleaning, and constant care after each tenant's departure, thus preserving the property's value and its accessories.
                                    </li>

                                    <li>
                                        <i class="las la-dot-circle"></i>
                                        The company handles all administrative, operational, legal, and marketing tasks and provides a quarterly report on property performance, net income, profits, and cash distributions.
                                    </li>

                                    <li>
                                        <i class="las la-dot-circle"></i>
                                        The contractual formula is partnership-based, with each property having its own commercial registration. The capital is managed by a legal intermediary firm, and an annual financial audit is performed by an authorized financial office approved by the Zakat and Income Authority.
                                    </li>

                                    <li>
                                        <i class="las la-dot-circle"></i>
                                        The neighborhood is fully serviced and the property is located on a vital main street, close to the train station and King Fahd Stadium, which increases occupancy during peak hours.
                                    </li>
                                </ul>

                                <div className='benefits'>

                                    <div className='benefit'>
                                        <i class="las la-chart-line"></i>
                                        <h3>Property Management for Value Increase and Sale</h3>
                                        <p>
                                            Qasura manages properties with the aim of increasing their value and selling them as real estate projects, rather than just as buildings. This significantly increases market value.
                                        </p>
                                    </div>

                                    <div className='benefit'>
                                        <i class="las la-headset"></i>
                                        <h3>Customer Service</h3>
                                        <p>
                                            The company provides remote customer service, answering questions and inquiries 24/7. Additionally, supervisors are present in each city to carry out necessary repairs if needed.
                                        </p>
                                    </div>

                                    <div className='benefit'>
                                        <i class="las la-link"></i>
                                        <h3>Marketing through Platforms</h3>
                                        <p>
                                            Renting will be done through all recognized rental platforms in the Kingdom, and all platforms will be linked to the company's central management system.
                                        </p>
                                    </div>

                                </div>

                                <div className='customer-bar'>
                                    <div className='text'>
                                        <h2>Satisfied Customers</h2>
                                        <span>98%</span>
                                    </div>
                                    <div className='bar'>
                                        <div className='bar-value'></div>
                                    </div>
                                </div>

                                <div className='contact'>
                                    <a href='https://iwtsp.com/966530104099'>
                                        Send a Message 
                                        <i class="lab la-whatsapp"></i>
                                    </a>
                                    <div className='call'>
                                        <i class="las la-phone-volume"></i>
                                        <div className='text'>
                                            <h5>Contact Us</h5>
                                            <a href="https://iwtsp.com/966530104099">
                                                +966 530 104 099
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
