import React from 'react';
import { Link } from 'react-router-dom';
import { GiFocusedLightning } from 'react-icons/gi';
import './Navbar.css';

const Navbar = (props) => {

    return (
        <div className="navbar">
            <Link to={`/`}>
                <h1 className="navbar-logo"><GiFocusedLightning style={{fontSize: "1.5rem"}}/> SeatFreak</h1>
            </Link>
        </div>
    )
}

export default Navbar;
