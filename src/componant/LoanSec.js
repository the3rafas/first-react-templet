import React from 'react';
import '../App.css';
import People from '../images/people.webp';
export default function LoanSec() {
    return (
        <div className='drop container-fluid row justify-content-evenly  m-auto my-5 ' >
            <div className='row  justify-content-between align-items-center ' style={{ marginTop: '12rem' }}>
                <div className='col-lg-6 col-md-10 m-auto '>
                    <img src={People} alt='' className='img-fluid' />
                </div>
                <div className='col-lg-5 col-md-10 m-auto bg-white text-dark p-5 text-start rounded' >
                    <h4 className='mb-4 display-5 fw-normal'>Why Choose Us?</h4>
                    <p className='text-muted h5'>Esteem spirit temper too say adieus who direct esteem.
                        It esteems luckily or picture placing drawing.
                        Apartments frequently or motionless on reasonable.</p>
                    <ul className='my-5 list-unstyled text-start  '>
                        <li className='m-3'> <span></span>Loans with quick approval</li>
                        <li className='m-3'> <span></span>Customize a loan based on the amount.</li>
                        <li className='m-3'> <span></span>Good credit profile and you have built your loan.</li>
                        <li className='m-3 '> <span></span>We provide online instant cash loans.</li>
                    </ul>
                    <button className='btn gbtn'>About Us</button>
                </div>

            </div>
        </div>
    )
}
