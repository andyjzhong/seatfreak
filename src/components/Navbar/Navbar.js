import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {

    return (
        <div className="navbar">
            <Link to={`/`}>
                <h1 className="navbar-logo">SeatFreak</h1>
            </Link>
        </div>
    )
}

export default Navbar;
