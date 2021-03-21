import React, { Component } from 'react'

export default class Footer extends Component {
    year = new Date().getFullYear();
    render() {
        return (
            <section className="footer">
                &copy;{this.year} | Bahari Resort
                <p>
                    Developed by&nbsp;
                <a href="mailto:ryanmwakio6@gmail.com">Ryan Mwakio</a>
                </p>
            </section>
        )
    }
}
