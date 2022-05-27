import React, { useState } from 'react';
import '../App.css';
import Man from '../images/man.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';


export default function AskSec() {
    var [iconDest, setIconDest] = useState(false)
    let changeIconDest = () => {
        setIconDest(!iconDest);
    }
    let Details = () => {
        return (
            <details className=' border-bottom py-3' >
                <summary className='d-block' >
                    <h3 className='h6 ' onClick={changeIconDest}><FontAwesomeIcon icon={iconDest ? faChevronUp : faChevronDown} className='me-4' />
                        Adieus who direct esteem It esteems luckily?</h3>
                </summary>
                <p className='text-muted p-3'>Esteem spirit temper too say adieus who direct esteem esteems luckily or
                    picture placing drawing.</p>
            </details>)
    }
    return (
        <div className=' drop container-fluid  ps-0 justify-content-evenly mb-5' >
            <div className='row   justify-content-between align-items-center ' >
                <div className='col-lg-6 col-md-10  '>
                    <img src={Man} alt='' className='img-fluid' />
                </div>
                <div className='col-lg-5 col-md-10 m-auto bg-white text-dark p-5 text-start rounded' >
                    <h4 className='mb-4 display-5 fw-normal'>Frequently ask</h4>
                    {Details()}
                    {Details()}
                    {Details()}

                </div>

            </div>
        </div>
    )
}
