import React, { useContext } from 'react';
import { DataContext } from '../../components/DataContext/DataContext'
import { Link } from 'react-router-dom';
import { GiFocusedLightning } from 'react-icons/gi';
import './Navbar.css';

const Navbar = (props) => {

    const {width} = useContext(DataContext);

    return (
        <div className="navbar" style={(width <= 800) ? {backgroundColor: "white"} : {backgroundColor: "rgba(255, 255, 255, 0)"}}>
            <Link to={`/`}>
                <h1 className="navbar-logo" style={(width <= 800) ? {textAlign: "center"} : {textAlign: "left"}}><GiFocusedLightning style={{fontSize: "1.5rem"}}/> SeatFreak</h1>
            </Link>
        </div>
    )
}

export default Navbar;
