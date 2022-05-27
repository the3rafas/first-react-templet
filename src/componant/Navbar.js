import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import imgLogo from '../images/Logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faSlidersH, faTimes } from '@fortawesome/free-solid-svg-icons';




function Navbar() {
    const [navIcon, setnavIcon] = useState(true);
    function changeNavIcon() {
        setnavIcon(!navIcon)
    }



    window.onscroll = () => {
        if (window.scrollY >= 360) {
            document.querySelector("nav").style.backgroundColor = "#040e2779";
        } else {
            document.querySelector("nav").style.backgroundColor = "transparent"
        };

        document.querySelectorAll("a").forEach((e) => {
            e.addEventListener("click", () => window.scrollTo(0, 0))
        });
        document.querySelectorAll("[data-slide-btn]").forEach(btn => {
            btn.addEventListener("click", () => {
                let counter = btn.dataset.slideBtn === "Next" ? 1 : -1;
                let slide = btn.closest(".cont-slider").querySelector("[data-slide]");
                let activeSlide = slide.querySelector("[data-active]");
                let newIndex = [...slide.children].indexOf(activeSlide) + counter;
                if (newIndex < 0) newIndex = slide.children.length - 1;
                if (newIndex >= slide.children.length) newIndex = 0;
                slide.children[newIndex].dataset.active = true;
                delete activeSlide.dataset.active;
                console.log("hi")


            })

        });
    };



    return (
        <nav className="navbar navbar-expand-lg navbar-light position-fixed w-100 ">
            <div className="container-fluid py-3 mx-5">
                <Link className="navbar-brand" to="#">
                    <img src={imgLogo} alt='' className='' />
                </Link>
                <button className="navbar-toggler   " type="button" onClick={changeNavIcon} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"  >
                    <FontAwesomeIcon icon={navIcon ? faSlidersH : faTimes} />
                </button>
                <div className={navIcon ? " collapse navbar-collapse justify-content-center" : "navDrop"} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 justify-content-center w-100 mb-lg-0">
                        <li className="nav-item px-2">
                            <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link className="nav-link text-white" to="/loan">Loan</Link>
                        </li>

                        <li className="nav-item px-2">
                            <Link className="nav-link text-white " to="/about#" aria-disabled="true">About</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link className="nav-link text-white" to="/pages">Pages</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link className="nav-link text-white" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link className="nav-link text-white" to="/faq">FAQ</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link className="nav-link text-white" to="/contact">Contact</Link>
                        </li>
                    </ul>

                </div>
                <form className="d-flex navBox align-items-center">
                    <div className='text-white mx-3 pe-auto '>
                        <FontAwesomeIcon icon={faPhoneAlt} className=' mx-3 Pcolor' style={{ fontSize: '.8rem' }} />
                        +10 673 567 367</div>
                    <Link className="" to="/pages">
                        <button className="btn navbtn Pcolor px-2 py-3" type="submit" >
                            Apply For A Loan
                        </button>
                    </Link>

                </form>
            </div>
        </nav >



    )
}

export default Navbar
