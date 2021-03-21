import React, { Component } from 'react'
import Title from './Title'

export default class Services extends Component {

    state = {
        services: [
            {
                icon: "fas fa-coffee",
                title: "Free inhouse coffee",
                info: "Enjoy the best of Kenyan coffee prepared by the best coffee makers in the country",
            },
            {
                icon: "fas fa-rss",
                title: "Free unlimited Internet",
                info: "Come enjoy the unlimited internet as you swim,hang-out and havefun with your loved ones",
            },
            {
                icon: "fas fa-truck",
                title: "Free shuttle",
                info: "Free transport through the comfortable hotel shuttles to and from locations",
            },
            {
                icon: "fas fa-beer",
                title: "Strongest beer",
                info: "Relax and rewind as you enjoy a glass of incredible beer brewed to perfection to your satisfaction",
            }
        ]
    };


    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span className={item.icon}></span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
