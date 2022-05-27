import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function Contact() {
    return (
        <div >
            <header className='drop mb-5 header-page' >
                <div className='container-fluid headtext d-flex align-items-center h-100 justify-content-start text-white  mx-5'>
                    <h1 className='display-3 fw-bold'>Blog</h1>
                </div>
            </header >
            <div className='container'>
                <div className=' dropmy-5'>
                    <iframe className='col-lg-10 col-md-12 col-sm-12' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13618.601045326941!2d31.640780800000005!3d31.42376065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f9e23f3e2a7b33%3A0x60763243c6d6d5ea!2z2KzYp9mF2LnYqSDYr9mF2YrYp9i3!5e0!3m2!1sar!2seg!4v1641300372778!5m2!1sar!2seg" height="450" loading="lazy"></iframe>
                </div>
                <div className="row my-4">
                    <h2 className='mt-5 display-4'>Get in Touch</h2>
                    <div className=" drop col-lg-8 col-md-12 mb-5">
                        <textarea className="form-control my-3" id="exampleFormControlTextarea1" rows="8"  ></textarea>
                        <div className="row g-3">
                            <div className="col">
                                <input type="text" className="form-control my-3" placeholder="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control my-3" placeholder="Last name" />
                            </div>
                        </div>
                        <input className="form-control my-3" type="text" placeholder="ener subject" />
                        <button className='btn  gbtn'>SEND MESSAGE</button>

                    </div>

                    <div className="col-lg-4 col-md-12">
                        <ul className='list-unstyled drop '>
                            <li className='mb-1  pb-3'>
                                <div className='row  justify-content-between'>
                                    <div className='col-1'>
                                        <FontAwesomeIcon icon={faHome} className='h1 ' />
                                    </div>
                                    <div className='col-9'>
                                        <h6 className='text-dark fw-bolder text-decoration-none'>From life was you fish...</h6>
                                        <p className='text-muted fw-normal'> January 12, 2019</p>
                                    </div>

                                </div>
                            </li>
                            <li className='mb-1  pb-3'>
                                <div className='row  justify-content-between'>
                                    <div className='col-1 '>
                                        <FontAwesomeIcon icon={faMobileAlt} className='h1' />

                                    </div>
                                    <div className='col-9'>
                                        <h6 className='text-dark fw-bolder text-decoration-none'>From life was you fish...</h6>
                                        <p className='text-muted fw-normal'> January 12, 2019</p>
                                    </div>

                                </div>
                            </li>
                            <li className='mb-1  pb-3'>
                                <div className='row  justify-content-between'>
                                    <div className='col-1'>
                                        <FontAwesomeIcon icon={faEnvelope} className='h1' />

                                    </div>
                                    <div className='col-9'>
                                        <h6 className='text-dark fw-bolder text-decoration-none'>From life was you fish...</h6>
                                        <p className='text-muted fw-normal'> January 12, 2019</p>
                                    </div>

                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}
