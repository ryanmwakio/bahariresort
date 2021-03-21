import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from "./Title"



//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

function RoomFilter({ rooms }) {
    const context = useContext(RoomContext)
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context

    //get unique types
    let types = getUnique(rooms, 'type');

    //filtering the rooms***add all to the room type category
    types = ['all', ...types];

    //map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })


    return (
        <section className="filter-container">
            <Title title="search rooms" />

            <form className="filter-form">

                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type"
                        id="type" value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/* select type end */}

                {/* select guest capacity */}
                <div className="form-group">
                    <label htmlFor="capacity">Capacity</label>
                    <select name="capacity"
                        id="capacity" value={capacity}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>
                {/* select guests capacity end */}

                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">room price kshs{price * 100}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control form-control-range" />

                </div>
                {/* room price end */}

                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" id="size" name="minSize" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" id="size" name="maxSize" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/* size end */}

                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" id="breakfast" name="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" id="pets" name="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* extras end */}



            </form>
        </section>
    )
}

export default RoomFilter