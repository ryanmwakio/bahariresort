import React, { Component } from "react";
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'
import StyledHero from '../components/StyledHero';


class SingleRoom extends Component {

    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext;




    render() {
        const { getRoom } = this.context;

        const room = getRoom(this.state.slug)


        if (!room) {
            return <div className="error">
                <h5>No such room could be found...</h5>
                <Link to="/rooms" className="btn-primary">back to rooms</Link>
            </div>
        }

        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room

        return (
            <>
                <StyledHero img={images[0]}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">back to rooms</Link>
                    </Banner>
                </StyledHero >

                <section className="single-room">
                    <div className="single-room-images">
                        {images.map((image, index) => {
                            return <img key={index} src={image} alt={name} className="single-room-img" />
                        })}
                    </div>

                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price: kshs{price * 100}</h6>
                            <h6>size: {size} SQFT</h6>
                            <h6>max capacity: {capacity > 1 ? capacity + " people" : capacity + " person"}</h6>
                            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                            <h6>{breakfast ? "free breakfast included" : "no free breakfast included"}</h6>
                        </article>
                    </div>
                </section>

                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key="index">-{item}</li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
}

export default SingleRoom;