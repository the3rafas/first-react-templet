import React from 'react'

function CardApp(props) {
    return (
        <div className='drop col-lg-3 col-md-6 fw-bold  text-start p-4 ' >
            <div className='num-circle justify-content-center align-items-center d-flex' >{props.num}</div>
            <h5 className=' my-3 h3 fw-normal '>{props.title}</h5>
            <p className='text-muted fw-normal'>We will customize a loan based on the amount of cash your company need term</p>
        </div >
    )
}

export default CardApp
