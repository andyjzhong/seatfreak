import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    let responseArray = [];

    const [searchString, setSearchString] = useState("");
    const [events, setEvents] = useState([]);

    // useEffect(() => {
    //     getSearchResults(searchString);
    // }, []);

    const handleChange = (e) => {
        console.log(e.target.value);
        setSearchString(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Clicked a button!");

        if(searchString.length > 0) {
            console.log("@@ Search String is:", searchString);
            getSearchResults(searchString);
        }
    }

    const getSearchResults = () => {
        const baseUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_API_KEY}`
        const url = `${baseUrl}&keyword=${searchString}&locale=*&size=5`;

        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.warn("API call Success!", res._embedded.events);

                responseArray = res._embedded.events
                console.log("ARRAY DATA IS THIS:::", responseArray);

                if(res) {
                    setEvents(responseArray)
                    console.log("events state is now updated to:", events);
                }

                setSearchString('');
            })

            .catch(console.error);
    }

    return (
        <div className="home-screen">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="ui input">
                    <input className="search-bar" type="text" placeholder="Search" onChange={handleChange} value={searchString}/>
                </div>
                    <button className="search-button ui button" type="submit">Search</button>
            </form>
        </div>
    )
}

export default Home;

<Link to={`/search`}>
    <button className="search-button ui button" type="submit">Search</button>
</Link>
