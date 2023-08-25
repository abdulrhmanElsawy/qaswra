import './css/contact.css';


function Contact(){
    return(
        <>
            <section id="contact" className='contact'>
                <div className='container'>
                    <div className='contact-content'>
                        <div className='map'>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14946551.076611191!2d55.72134382506679!3d23.851991658419408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2z2KfZhNiz2LnZiNiv2YrYqQ!5e0!3m2!1sar!2seg!4v1691506737544!5m2!1sar!2seg" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                            <div className='contact-info'>

                                <div className='info'>
                                    <i class="las la-mobile"></i>
                                    <h2> + 966 530 104 099 </h2>
                                </div>


                                <div className='info'>
                                    <i class="las la-street-view"></i>
                                    <h2> المملكة العربية السعودية  </h2>
                                </div>


                                
                                <div className='info'>
                                    <i class="las la-envelope-open-text"></i>
                                    <h2> info@qaswra.com </h2>
                                </div>

                            </div>
                        </div>


                        <div className='contact-form'>
                            <form>
                                <div className='inputs'>

                                    <div className='input'>
                                        <label> الاسم </label>
                                        <i class="las la-user-circle"></i>
                                        <input type='text' placeholder='اسم الراسل' required/>
                                    </div>

                                    <div className='input'>
                                        <label> رقم الهاتف </label>
                                        <i class="las la-mobile"></i>
                                        <input type='tel' placeholder='رقم الهاتف' required/>
                                    </div>


                                </div>


                                <div className='inputs'>

                                    <div className='input'>
                                        <label> البريد </label>
                                        <i class="las la-envelope"></i>
                                        <input type='email' placeholder='البريد الالكتروني' required/>
                                    </div>

                                </div>


                                <div className='inputs'>

                                    <div className='input'>
                                        <label> الرسالة </label>
                                        <i class="lar la-comment-alt"></i>
                                        <textarea placeholder='رسالتك' required ></textarea>
                                    </div>

                                </div>


                                <div className='privacy'>
                                    <input type='checkbox' required />
                                    <label> أنا موافق بأن الموقع سوف يقوم بتخزين بياناتي التي قمت بملئها الان </label>
                                </div>

                                <button type='submit'>  إرسال  </button>


                            </form>
                        </div>




                    </div>



                </div>
            </section>
        </>
    )
}

export default Contact;