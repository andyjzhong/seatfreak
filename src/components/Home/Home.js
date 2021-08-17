import React from 'react';

const Home = () => {
    return (
        <div className="home-screen">
            Welcome to SeatFreak!
            <form className="search-form">
                <input className="search-bar" type="text" placeholder="Search"/>
            </form>
        </div>
    )
}

export default Home;
