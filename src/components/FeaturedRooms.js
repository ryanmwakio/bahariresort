import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

export default class FeaturedRooms extends Component {

    static contextType = RoomContext;


    render() {
        let { loading, rooms } = this.context;



        rooms = rooms.map(room => {
            return room.featured ? <Room key={room.id} room={room} /> : null;
        })


        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>



            </section>
        )
    }
}
