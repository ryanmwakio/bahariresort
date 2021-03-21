import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Hero from '../components/Hero';


const Error = () => {
    return (
        <div>
            <Hero>
                <Banner title="404" subtitle="oops! page not found">
                    <Link to="/" className="btn-primary">Go back to home</Link>
                </Banner>
            </Hero>
        </div>
    )
}

export default Error;