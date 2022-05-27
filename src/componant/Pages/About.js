import React from 'react';
import './About.css';
import LoanSec from '../LoanSec';
import AskSec from '../AskSec';
import Headtext from '../Headtext';
import CardApp from '../CardApp';
import SlideSec from '../SlideSec';


export default function About() {
    return (
        <div>
            <header className='mb-5 header-about' >
                <div className='container-fluid headtext d-flex align-items-center h-100 justify-content-start text-white  mx-5'>
                    <h1 className='display-3 fw-bold'>About Us</h1>


                </div>
            </header >
            <LoanSec />
            <div className='container-fluid row justify-content-evenly  m-auto mt-5 ' style={{ backgroundColor: '#f5fbff' }}>
                <Headtext title="How it Works" />
                <CardApp num="01" title="Apply for loan" />
                <CardApp num="02" title="Application review" />
                <CardApp num="03" title="Get funding fast" />
            </div>
            <AskSec />
            <SlideSec />
        </div >
    )
}
