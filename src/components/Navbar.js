import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";


export default class Navbar extends Component {

    state = {
        isOPen: false,
    }

    handleToggle = () => {
        this.setState({ isOPen: !this.state.isOPen })
    }


    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Beach Resort" className="nav-logo-img" />
                        </Link>

                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <i className="fas fa-align-right nav-icon"></i>
                        </button>
                    </div>

                    <ul className={this.state.isOPen ? "nav-links show-nav" : "nav-links"}>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink exact to="/rooms/">Rooms</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
