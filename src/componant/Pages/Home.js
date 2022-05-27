import React from 'react';
import './header.css';
import LoanSec from '../LoanSec';
import AskSec from '../AskSec';
import Headtext from '../Headtext';
import CardApp from '../CardApp';
import SlideSec from '../SlideSec';


function Home() {
    return (
        <div>
            <header className='  mb-5' >
                <div className='container-fluid headtext d-flex align-items-center h-100 justify-content-center text-white  mx-5'>
                    <div className='row headtext justify-content-between align-items-center '>
                        <div className='drop col-lg-6 col-md-10 m-auto '>
                            <h1 className='display-3'>Get Loan for your Business growth or startup</h1>
                            <button className='btn d-flex my-5 gbtn'>How It Works</button>
                        </div>
                        <div className=' drop col-lg-5 col-md-10 m-auto bg-white text-dark p-5 text-center rounded'>
                            <h2 className='mb-4'>How much do you want?</h2>
                            <p className='text-muted h6'>We provide online instant cash loans with quick</p>
                            <select className="form-select my-5 p-3" aria-label="Default select example">
                                <option >Amount</option>
                                <option value="10">$10</option>
                                <option value="40">$40</option>
                                <option value="50">$50</option>
                            </select>
                            <select className="form-select p-3 " aria-label="Default select example">
                                <option >Month</option>
                                <option value="1">3 Month</option>
                                <option value="2">6 Month</option>
                                <option value="3">9 Month</option>
                            </select>
                            <p className='my-5 text-left'>You have to pay: $0</p>
                            <button className='btn d-block w-100 gbtn'>Continue</button>
                        </div>

                    </div>
                </div>
            </header>

            <LoanSec />
            <div className=' container-fluid row justify-content-evenly  m-auto mt-5 ' style={{ backgroundColor: '#f5fbff' }}>
                <Headtext title="How it Works" />
                <CardApp num="01" title="Apply for loan" />
                <CardApp num="02" title="Application review" />
                <CardApp num="03" title="Get funding fast" />
            </div>
            <AskSec />
            <SlideSec />
        </div>
    )
}

export default Home
