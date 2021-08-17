import React, { useState, useEffect } from 'react';
import SearchResult from '../../components/SearchResult/SearchResult';

const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_API_KEY}&locale=*&size=5`;

const SearchResults = () => {

    const [performances, setPerformances] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.warn("API success!", json._embedded.events)
                setPerformances(json._embedded.events);
            })
            .catch(
                console.warn("Something went wrong with the API request", console.error)
            )
    }, []);

    let performanceRow = performances.map((performance, index) => {

        console.log("performance", performance);
        console.log("index", index);

        return (
            <SearchResult
                name = {performance.name}
                key = {performance.id}
                performanceId = {performance.id}
            />
        )
    })

    return (
        <div className="search-results-screen">
            {performanceRow}
        </div>
    )
}

export default SearchResults;
