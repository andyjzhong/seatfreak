import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    return (
        <div>
            <Link to={`/`}>
                <button>Go Home</button>
            </Link>
        </div>
    )
}

export default Navbar;
