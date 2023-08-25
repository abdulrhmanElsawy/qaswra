import React from 'react';
import '../css/vision.css';
import goal from '../images/icons/goal_150275.png';
import vision from '../images/icons/vision_2421304.png';
import diamond from '../images/icons/diamond_576685.png';

function Vision() {
    return (
        <>
            <section className='visions'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                            <div className='vision'>
                                <div className='header'>
                                    <img src={vision} alt='Vision Icon' />
                                    <h1> Vision </h1>
                                </div>
                                <p> Simplifying real estate investment for everyone. </p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                            <div className='vision'>
                                <div className='header'>
                                    <img src={goal} alt='Goal Icon' />
                                    <h1> Mission </h1>
                                </div>
                                <p> By facilitating real estate investment procedures, reducing the required capital to enter, and maximizing returns to their fullest extent. </p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                            <div className='vision'>
                                <div className='header'>
                                    <img src={diamond} alt='Diamond Icon' />
                                    <h1> Values </h1>
                                </div>
                                <p> Automation, Simplicity, Innovation. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Vision;
