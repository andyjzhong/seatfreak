import React, { useState, useEffect } from 'react';
import SearchResult from '../../components/SearchResult/SearchResult';

const url = "https://audubon-api.herokuapp.com/api/birds";

const SearchResults = () => {

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
