import React from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboardCheck } from "react-icons/bs";
import img from "../../Assets/img(1).jpg";
import img2 from "../../Assets/img(2).jpg";
import img3 from "../../Assets/img(3).jpg";
import img4 from "../../Assets/img(4).jpg";
import img5 from "../../Assets/img(5).jpg";
import img6 from "../../Assets/img(6).jpg";
import img7 from "../../Assets/img(7).jpg";
import img8 from "../../Assets/img(8).jpg";
import img9 from "../../Assets/img(9).jpg";

const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '₹49,000',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Kyoto',
        location: 'Japan',
        grade: 'HISTORICAL BEAUTY',
        fees: '₹60,000',
        description: 'Kyoto, once the capital of Japan, is a city on the island of Honshu. It\'s famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses.'
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Santorini',
        location: 'Greece',
        grade: 'SCENIC BEAUTY',
        fees: '₹75,000',
        description: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape.'
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'ANCIENT WONDER',
        fees: '₹55,000',
        description: 'Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, renowned for its dry-stone walls that fuse huge blocks without the use of mortar.'
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Paris',
        location: 'France',
        grade: 'ROMANTIC GETAWAY',
        fees: '₹70,000',
        description: 'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy, and culture.'
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Cape Town',
        location: 'South Africa',
        grade: 'NATURAL WONDER',
        fees: '₹45,000',
        description: 'Cape Town is a port city on South Africa’s southwest coast, on a peninsula beneath the imposing Table Mountain.'
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Rio de Janeiro',
        location: 'Brazil',
        grade: 'VIBRANT CULTURE',
        fees: '₹65,000',
        description: 'Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain, a granite peak with cable cars to its summit.'
    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Amalfi Coast',
        location: 'Italy',
        grade: 'COASTAL BEAUTY',
        fees: '₹80,000',
        description: 'The Amalfi Coast is a 50-kilometer stretch of coastline along the southern edge of Italy’s Sorrentine Peninsula, in the Campania region.'
    },
    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Maui',
        location: 'Hawaii, USA',
        grade: 'TROPICAL PARADISE',
        fees: '₹90,000',
        description: 'Maui, known also as the “Valley Isle,” is the second-largest Hawaiian island.'
    }
];


const Main = () => {
    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=> {
                        return(
                            <div key={id} 
                            className="singleDestination">
                                {}
                            <div className="imageDiv">
                                    <img src={imgSrc} alt= {destTitle} />
                            </div>

                            <div className="cardInfo">
                                <h4 className="destTitle">{destTitle}</h4>
                                <span className="continent flex">
                                    <HiOutlineLocationMarker className="icon" />
                                    <span className="name">{location}</span>
                                </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS<BsClipboardCheck className="icon" />
                                    </button>
                                
                            </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Main;