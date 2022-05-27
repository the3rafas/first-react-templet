import React from 'react';
import './blog.css'
import { Link } from 'react-router-dom';
import GoogleCard from '../GoogleCard';
import img1 from '../../images/blog-1.webp';
import img2 from '../../images/blog-2.webp';
import img3 from '../../images/blog-3.webp';
import img4 from '../../images/blog-4.webp';
import img5 from '../../images/blog-5.webp';
import post1 from '../../images/post1.webp';
import post2 from '../../images/post2.webp';
import post3 from '../../images/post3.webp';
import post4 from '../../images/post4.webp';
import feeds1 from '../../images/feeds1.webp';
import feeds2 from '../../images/feeds2.webp';
import feeds3 from '../../images/feeds3.webp';
import feeds4 from '../../images/feeds4.webp';
import feeds5 from '../../images/feeds5.webp';
import feeds6 from '../../images/feeds6.webp';





export default function Blog() {
    return (
        <div>
            <header className='mb-5 header-page' >
                <div className='container-fluid headtext d-flex align-items-center h-100 justify-content-start text-white  mx-5'>
                    <h1 className='display-3 fw-bold'>Blog</h1>
                </div>
            </header >

            <div className='container-fluid justify-content-evenly my-5 row mx-auto'>
                <div className='col-lg-7 col-md-12'>
                    <GoogleCard img={img1} />
                    <GoogleCard img={img2} />
                    <GoogleCard img={img3} />
                    <GoogleCard img={img4} />
                    <GoogleCard img={img5} />



                </div>
                <div className='col-lg-4 my-5 p-4 col-md-12'>
                    <div className='p-3 w-100 bg-light mb-3 ' >
                        <input type='search' className='d-block w-100 mb-3 p-2' placeholder='Search Keyword' />
                        <input type='submit' className='d-block w-50 m-auto btn navbtn Pcolor' value='SEARCH' />

                    </div>
                    <div className='p-3 w-100 bg-light mb-3 ' >
                        <h3 className='mb-5 border-bottom pb-3'>Category</h3>
                        <ul className='list-unstyled '>
                            <li className='mb-3 border-bottom pb-3'><Link to="" className='text-muted text-decoration-none'>Resaurant food  (37)</Link> </li>
                            <li className='mb-3 border-bottom pb-3'><Link to="" className='text-muted text-decoration-none'>Travel news(10)</Link> </li>
                            <li className='mb-3 border-bottom pb-3'><Link to="" className='text-muted text-decoration-none'>Modern technology(03)</Link> </li>
                            <li className='mb-3 border-bottom pb-3'><Link to="" className='text-muted text-decoration-none'>Product(11)</Link> </li>
                            <li className='mb-3 border-bottom pb-3'><Link to="" className='text-muted text-decoration-none'>Inspiration21</Link> </li>
                            <li className='mb-3 border-bottom pb-3'><Link to="" className='text-muted text-decoration-none'>Health Care (21)09</Link> </li>


                        </ul>

                    </div>
                    <div className='p-3 w-100 bg-light mb-3 ' >
                        <h3 className='mb-5 border-bottom pb-3'>Recent Post</h3>
                        <ul className='list-unstyled '>
                            <li className='mb-3  pb-3'>
                                <div className='row  justify-content-between'>
                                    <div className='col-3'>
                                        <img src={post1} />
                                    </div>
                                    <div className='col-8'>
                                        <Link to="" className='text-dark fw-bolder text-decoration-none'>From life was you fish...</Link>
                                        <p className='text-muted fw-normal'> January 12, 2019</p>
                                    </div>

                                </div>
                            </li>
                            <li className='mb-3  pb-3'>
                                <div className='row  justify-content-between'>
                                    <div className='col-3'>
                                        <img src={post2} />
                                    </div>
                                    <div className='col-8'>
                                        <Link to="" className='text-dark fw-bolder text-decoration-none'>From life was you fish...</Link>
                                        <p className='text-muted fw-normal'> January 12, 2019</p>
                                    </div>

                                </div>
                            </li>
                            <li className='mb-3  pb-3'>
                                <div className='row  justify-content-between'>
                                    <div className='col-3'>
                                        <img src={post3} />
                                    </div>
                                    <div className='col-8'>
                                        <Link to="" className='text-dark fw-bolder text-decoration-none'>From life was you fish...</Link>
                                        <p className='text-muted fw-normal'> January 12, 2019</p>
                                    </div>

                                </div>
                            </li>
                            <li className='mb-3  pb-3'>
                                <div className='row  justify-content-between'>
                                    <div className='col-3'>
                                        <img src={post4} />
                                    </div>
                                    <div className='col-8'>
                                        <Link to="" className='text-dark fw-bolder text-decoration-none'>From life was you fish...</Link>
                                        <p className='text-muted fw-normal'> January 12, 2019</p>
                                    </div>

                                </div>
                            </li>


                        </ul>

                    </div>

                    <div className='p-3 w-100 bg-light mb-3 ' >
                        <h3 className='mb-5 border-bottom pb-3'>Tag Clouds </h3>
                        <div className='d-flex flex-wrap tags'>
                            <div className='me-3 mb-2'>project</div>
                            <div className='me-3 mb-2'>love</div>
                            <div className='me-3 mb-2'>technology</div>
                            <div className='me-3 mb-2'>travel</div>
                            <div className='me-3 mb-2'>restaurant</div>
                            <div className='me-3 mb-2'>life</div>
                            <div className='me-3 mb-2'>style</div>
                            <div className='me-3 mb-2'>design</div>
                            <div className='me-3 mb-2'>illustration</div>
                        </div>
                    </div>
                    <div className='p-3 w-100 bg-light mb-3 ' >
                        <h3 className='mb-5 border-bottom pb-3'>Instagram Feeds  </h3>
                        <div className='d-flex flex-wrap '>
                            <img src={feeds1} className='col-3 me-3 mb-3' />
                            <img src={feeds2} className='col-3 me-3 mb-3' />
                            <img src={feeds3} className='col-3 me-3 mb-3' />
                            <img src={feeds4} className='col-3 me-3 mb-3' />
                            <img src={feeds5} className='col-3 me-3 mb-3' />
                            <img src={feeds6} className='col-3 me-3 mb-3' />
                        </div>
                    </div>
                    <div className='p-3 w-100 bg-light mb-3 ' >
                        <h3 className='mb-5 border-bottom pb-3'>Newsletter   </h3>
                        <input type='mail' className='d-block w-100 mb-3 p-2' placeholder='Enter email' />
                        <input type='submit' className='d-block w-50 m-auto btn navbtn Pcolor' value='SUBSCRIBE' />

                    </div>
                </div>

            </div>
        </div>
    )
}
