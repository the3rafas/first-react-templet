import React from 'react';
import './About.css';



export default function Page() {
    return (
        <div>
            <header className='drop mb-5 header-page' >
                <div className='container-fluid headtext d-flex align-items-center h-100 justify-content-start text-white  mx-5'>
                    <h1 className='display-3 fw-bold'>Apply Now</h1>
                </div>
            </header >
            <form className='drop form container '>


                <h2 className='text-center mb-3'>How much do you want?</h2>
                <p className='text-center mb-3 text-muted'>We provide online instant cash loans with quick approval that suit your term length</p>
                <input className="form-control form-control-lg mb-3" type="text" placeholder="Your name" />
                <input className="form-control form-control-lg mb-3" type="mail" placeholder="Email" />
                <input className="form-control form-control-lg  mb-3 " type="phone" placeholder="Phone no. " />
                <select className="form-control form-control-lg text-muted  mb-3" aria-label="Default select example">
                    <option value="1">purpose</option>
                    <option value="2">purpose 1</option>
                    <option value="3">purpose 2</option>
                </select>
                <select className="form-control form-control-lg  text-muted mb-3" aria-label="Default select example">
                    <option >  Amount</option>
                    <option value="1">$10</option>
                    <option value="2">$20</option>
                    <option value="3">$30</option>
                </select>
                <input className="form-control form-control-lg  mb-3 " type="month" placeholder="Phone no. " />
                <p className='mb-3 text-left'>You have to pay: $0</p>
                <textarea className="form-control mb-3 p-3" id="exampleFormControlTextarea1" placeholder='Massage' rows="12"></textarea>
                <button className='btn d-block w-100 mb-3 gbtn'>Aply now</button>
            </form>
        </div>
    )
}
