import React from "react";
import "./Home.css";
import video from "../../Assets/video.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListUl } from "react-icons/bs";
import { AiOutlineAppstore } from "react-icons/ai";

const Home = () => {
    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>
            <div className="homeContent container">
                <div className="textDiv">
                    <span className="smallText">
                        Our packages
                    </span>
                    <h1 className="homeTitle">
                        Search your Holiday
                    </h1>
                </div>

                <div className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter name here...." />
                            <GrLocation className="icon"/>
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Search your date:</label>
                        <div className="input flex">
                            <input type="date"  />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">
                                Max price:
                            </label>
                            <h3 className="total">₹40,000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="40000" min="8000"/>
                        </div>
                    </div>

                    <div className="searchOption flex">
                        <HiFilter className="icon"/>
                        <span>MORE FILTERS</span>
                    </div>
                </div>

                <div className="homeFootericons flex">
                    <div className="righticons">
                        <FiFacebook className="icon"/>
                        <AiOutlineInstagram className="icon"/>
                        <FaTripadvisor className="icon"/>
                    </div>
                    <div className="lefticons">
                        <BsListUl className="icon"/>
                        <AiOutlineAppstore className="icon"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;