import React from 'react'
import { Link } from 'react-router-dom';
import imgLogO from '../images/logo1.webp';
import './Footer.css'
function Footer() {




    return (

        <footer className=' dropcontainer-fluid d-flex flex-column align-items-center justify-content-between'>
            <div className=' container-fluid mx-3 row  justify-content-beteen justify-content-md-center'>
                <div className='col-lg-3  col-md-5 mb-3'>
                    <img src={imgLogO} className='mb-5' />
                    <p className='mb-0 text-muted h6'>finloan@support.com</p>
                    <p className='my-1 text-muted h6'>+10 873 672 6782</p>
                    <p className='mb-0 text-muted h6'>600/D, Green road, NewYork</p>

                </div>
                <div className='col-lg-3  col-md-5 mb-3'>
                    <h5 className='mb-5'>Services</h5>
                    <div>
                        <Link to="/" className='d-block mb-3 text-muted text-decoration-none h6 fw-normal'>SEO/SEM</Link>
                        <Link to="/" className='d-block mb-3 text-muted text-decoration-none h6 fw-normal'>Web design</Link >
                        <Link to="/" className='d-block mb-3 text-muted text-decoration-none h6 fw-normal'>Ecommerce</Link>
                        <Link to="/" className='d-block mb-3 text-muted text-decoration-none h6 fw-normal'>Digital marketing</Link>

                    </div>
                </div>
                <div className='col-lg-3  col-md-5 mb-3'>
                    <h5 className='mb-5'>Useful Links</h5>
                    <div>
                        <Link to="/" className='d-block mb-3 text-muted text-decoration-none h6 fw-normal'>About</Link>
                        <Link to="/" className='d-block mb-3 text-muted text-decoration-none h6 fw-normal'>Blog</Link>
                        <Link to="/" className='d-block mb-3 text-muted text-decoration-none h6 fw-normal'>Contact</Link>
                        <Link to="/" className='d-block mb-3 text-muted text-decoration-none h6 fw-normal'>Support</Link>

                    </div>
                </div>

                <div className='col-lg-3  col-md-5 mb-3'>
                    <h5 className='mb-5'>Useful Links</h5>
                    <div>
                        <div className='mail-put position-relative'>
                            <input className='mb-3' placeholder='Enter your mail' />
                            <button className='bg-primary btn text-white  '>Subscribe</button>
                        </div>
                        <p className='text-muted h6 fw-normal'>Esteem spirit temper too say adieus who direct esteem esteems luckily.</p>
                    </div>
                </div>

            </div>
            <div className='py-3 h6 text-muted'>
                Copyright ©2022 All rights reserved | This template is made with  by
                <Link to="/" className='  text-primary text-decoration-none  fw-bold'>Colorlib</Link>
            </div>
        </footer >

    )
}

export default Footer
