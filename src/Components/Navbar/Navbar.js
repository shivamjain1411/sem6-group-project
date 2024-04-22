import React from "react";
import "./navbar.css";
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState('navBar');
    //Function to show navbar
    const showNav= () => {
        setActive('navBar activeNavbar');
    }
    const removeNav= () => {
        setActive('navBar');
    }

    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logodiv">
                    <a href="#" className="logo flex">
                        <h1><MdTravelExplore className="icon"/>  Travel.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navList flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Packages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>
                        <button className="btn">
                            <a href="/Login">BOOK NOW</a>
                        </button>
                    </ul>
                    <div onClick={removeNav} className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>

                </div>
                <div onClick={showNav} 
                className="toggleNavbar">
                    <PiDotsNineBold className="icon"/>
                </div>
            </header>
        </section>
    );
}

export default Navbar;