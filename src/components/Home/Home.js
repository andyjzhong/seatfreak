import React, { useState } from 'react';

const Home = () => {

    const [inputValue, setInputValue] = useState();
    const [searchParam, setSearchParam] = useState();

    const handleChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Clicked a button!");
    }

    return (
        <div className="home-screen">

            <form className="search-form" onSubmit={handleSubmit}>
                <div className="ui input">
                    <input className="search-bar" type="text" placeholder="Search" onChange={handleChange}/>
                </div>
                <button className="search-button ui button" type="submit">Search</button>
            </form>
        </div>
    )
}

export default Home;
