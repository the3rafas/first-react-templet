import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComments } from '@fortawesome/free-solid-svg-icons';
export default function GoogleCard(props) {
    return (

        <div className="drop my-5" >
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body p-4 position-relative">
                <div className='date'>15<br />jan</div>
                <h2>Google inks pact for new 35-storey office</h2>
                <p className="card-text text-muted">That dominion stars lights dominion divide years for fourth have don't
                    stars is that he earth it first without heaven in place seed it second morning saying.</p>
                <div>
                    <Link to="" className='me-2 links'>
                        <FontAwesomeIcon icon={faUser} className='mx-2' /> Travel, Lifestyle
                    </Link>|
                    <Link to="" className='mx-1 links'>
                        <FontAwesomeIcon icon={faComments} className='mx-2' /> 03 Comments
                    </Link>

                </div>
            </div>
        </div>
    )
}
