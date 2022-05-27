import React from 'react';
import '../App.css';
import Man1 from '../images/man1.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


export default function SlideSec() {


   

    return (
        <div>
            <div className='drop container-fluid cont-slider position-relative'>
                <div className='position-absolute btn-slider-group'>
                    <button className=' btn-slider' data-slide-btn="Next"><FontAwesomeIcon icon={faChevronRight} /></button>
                    <button className='btn-slider' data-slide-btn="Prev"><FontAwesomeIcon icon={faChevronLeft} /></button>

                </div>
                <ul className='slide-component position-relative' data-slide>
                    <li data-active className='slide-item d-flex align-items-center justify-content-between px-5 list-unstyled m-auto'>
                        <div className='col-lg-2 col-md-2 col-sm-12 position-relative '>
                            <img src={Man1} />
                            <span className='befor'><FontAwesomeIcon icon={faQuoteLeft} /></span>
                        </div>
                        <div className='col-lg-9 col-md-7 col-sm-12  text-muted pe-5'>
                            <p className='h5'>
                                "1Working in conjunction with humanitarian aid agencies,
                                we have supported programmes to help alleviate human suffering through animal
                                welfare when people might depend on livestock as their only source of income or food."
                            </p>
                            <p className='h6'>- Micky Mouse</p>
                        </div>
                    </li>
                    <li className='slide-item d-flex align-items-center justify-content-between px-5 list-unstyled m-auto'>
                        <div className='col-lg-2 col-md-2 col-sm-12 position-relative '>
                            <img src={Man1} />
                            <span className='befor'><FontAwesomeIcon icon={faQuoteLeft} /></span>
                        </div>
                        <div className='col-lg-9 col-md-7 col-sm-12 text-muted pe-5'>
                            <p className='h5'>
                                "2Working in conjunction with humanitarian aid agencies,
                                we have supported programmes to help alleviate human suffering through animal
                                welfare when people might depend on livestock as their only source of income or food."
                            </p>
                            <p className='h6'>- Micky Mouse</p>
                        </div>
                    </li>

                </ul>

            </div>
        </div>
    )
}
