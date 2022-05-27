import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Cards(props) {
    return (
        <div className=' dropcard col-lg-3 col-md-6  text-center p-4 rounded'>
            <FontAwesomeIcon icon={props.pic} className='m-auto my-2 display-4 text-white' />
            <h3 className='text-white my-3 '>{props.title}</h3>
            <p className='Pcolor h3'>$3000-$10000</p>
            <ul className='my-5 list-unstyled text-start p-2 text-white'>
                <li className='m-4'> <span></span>Borrow - $350 over 3 months</li>
                <li className='m-4'> <span></span>Interest rate - 292% pa fixed</li>
                <li className='m-4'> <span></span>Total amount payable - $525.12</li>
                <li className='m-4'> <span></span>Representative - 1,286% APR</li>
            </ul>
            <button className='btn d-block w-100 gbtn'>Continue</button>
        </div >
    )
}

export default Cards

