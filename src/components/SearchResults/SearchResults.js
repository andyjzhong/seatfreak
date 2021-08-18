import React, { useEffect, useContext } from 'react';
import { DataContext } from '../../components/DataContext/DataContext'
import SearchResult from '../../components/SearchResult/SearchResult';

// const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_API_KEY}&locale=*&size=20`;

const SearchResults = () => {

    let responseArray = [];

    const {events, setEvents, searchString, setSearchString} = useContext(DataContext);

    useEffect(() => {
        getSearchResults(searchString);
    }, []);

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

    console.log("THIS IS THE EVENT FROM THE SEARCH RESULTS COMPONENT", events);

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(json => {
    //             console.warn("API success!", json._embedded.events)
    //             setPerformances(json._embedded.events);
    //         })
    //         .catch(
    //             console.warn("Something went wrong with the API request", console.error)
    //         )
    // }, []);

    let eventRow = events.map((event, index) => {

        console.log("event", event);
        console.log("index", index);

        return (
            <SearchResult
                dataObject = {event}
                key = {event.id}
            />
        )
    })

    return (
        <div className="search-results-screen">
            <h1>Search String Here</h1>
            <h3>Tickets</h3>

            <table class="ui selectable table">
                <thead>
                    <th>Date</th>
                    <th>Event</th>
                    <th>Price</th>
                    <th>ID</th>
                </thead>
                <tbody>
                    {eventRow}
                </tbody>
            </table>
        </div>
    )
}

export default SearchResults;
