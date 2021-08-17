import React, { useState } from 'react';

const Home = () => {

    const [searchValue, setSearchValue] = useState()

    const handleChange = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value)
    }

    return (
        <div className="home-screen">
            
            <form className="search-form">
                <div className="ui input">
                    <input className="search-bar" type="text" placeholder="Search" onChange={handleChange}/>
                </div>
                <button className="search-button ui button">Search</button>
            </form>
        </div>
    )
}

export default Home;
