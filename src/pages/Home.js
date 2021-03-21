import React from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import { Link } from "react-router-dom";
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

const Home = () => {
    return (
        <React.Fragment>

            <Hero hero="defaultHero">
                <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at kshs 10000">
                    <Link to="/rooms" className="btn-primary">our rooms</Link>
                </Banner>
            </Hero >
            <Services />
            <FeaturedRooms />

        </React.Fragment>
    )
}

export default Home;