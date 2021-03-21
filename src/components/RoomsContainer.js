import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { RoomConsumer } from '../context'
import Loading from './Loading'

function RoomsContainer() {


    return (

        <RoomConsumer>
            {
                (value) => {
                    const { loading, sortedRooms, rooms } = value;

                    if (loading) {
                        return <Loading />
                    }

                    return (
                        <>
                            < RoomFilter rooms={rooms} />
                            <RoomList rooms={sortedRooms} />
                        </>
                    )
                }
            }
        </RoomConsumer>


    )
}

export default RoomsContainer
