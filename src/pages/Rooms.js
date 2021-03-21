import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import RoomsContainer from "../components/RoomsContainer";


const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Our Rooms">
                    <Link to="/" className="btn-primary">Return to Home</Link>
                </Banner>
            </Hero>
            <RoomsContainer>

            </RoomsContainer>
        </>
    )
}

export default Rooms;