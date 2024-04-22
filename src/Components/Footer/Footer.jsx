import React from "react";
import "./footer.css";
import video2 from "../../Assets/video2.mp4";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";

const Footer = () => {
    return (
       <section className="footer">
        <div className="videoDiv">
        <video src={video2} muted autoPlay loop type="video/mp4"></video>
        </div>

        <div className="secContent container">
            <div className="contactDiv flex">
                <div className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with us</h2>
                </div>  

                <div className="inputDiv flex">
                    <input type="text" placeholder="Enter Email Address" />
                    <button className="btn flex" type="submit">
                       SEND <FiSend className="icon" />
                    </button>
                </div>
            </div>

            <div className="footerCard flex">
                <div className="footerInto flex">
                    <div className="logoDiv">
                        <a href="#" className="logo flex">
                           <MdOutlineTravelExplore className="icon"/> Travel.
                        </a>
                    </div>

                    <div className="footerParagraph">
                    Welcome to our world of wanderlust! At Travel, we are passionate about crafting unforgettable journeys that ignite the spirit of adventure in every traveler. With a deep-rooted love for exploration and a commitment to excellence, we specialize in curating bespoke travel experiences tailored to your unique desires. From the bustling streets of vibrant cities to the tranquil shores of remote islands, our meticulously designed itineraries promise to immerse you in the beauty and diversity of our planet. With a team of seasoned travel experts and local guides, we ensure every moment of your journey is filled with discovery, wonder, and authentic cultural experiences. Whether you're embarking on a solo expedition, a romantic getaway, or a family adventure, let us be your trusted companion in exploring the world's most captivating destinations. Join us on a journey of a lifetime, where every step is a new adventure waiting to unfold.
                    </div>

                    <div className="footerSocial flex">
                        <AiOutlineTwitter className="icon" />
                        <AiFillLinkedin className="icon" />
                        <AiOutlineInstagram className="icon" />
                        <FaTripadvisor className="icon" />
                    </div>
                </div>

                <div className="footerLinks grid">
                    {/* group 1 */}
                    <div className="linkGroup">
                        <span className="groupTitle">
                            OUR AGENCY
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Services
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Insurance
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Agency
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Tourism
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Payment
                        </li>
                    </div>
                     {/* group 2 */}
                     <div className="linkGroup">
                        <span className="groupTitle">
                            PARTNERS
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Bookings
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Rentcars
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Hostelworld
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Trivago
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            TripAdvisor
                        </li>
                    </div>
                     {/* group 3 */}
                     <div className="linkGroup">
                        <span className="groupTitle">
                            LAST MINUTE
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            London
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            California
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            India
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Europe
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Indonesia
                        </li>
                    </div>
                </div>

                <div className="footerDiv flex">
                    <small>BEST TRAVEL WEBSITE</small>
                    <small>COPYRIGHTS RESERVED - 2023 </small>
                </div>
            </div>

        </div>
       </section>
    );
}

export default Footer;