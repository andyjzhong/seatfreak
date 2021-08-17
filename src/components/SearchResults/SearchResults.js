import React, { useState, useEffect } from 'react';
import SearchResult from '../../components/SearchResult/SearchResult';


const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_API_KEY}&locale=*&size=5`;

const SearchResults = () => {
    console.log("@@ process.env is:", process.env);
    console.log("@@ URL is:", url);

    const [performances, setPerformances] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                console.warn("API success!", json)
                setPerformances(json);
            })
            .catch(
                console.warn("Something went wrong with the API request", console.error)
            )
    }, []);

    return (
        <div className="search-results-screen">
            <SearchResult />
        </div>
    )
}

export default SearchResults;
