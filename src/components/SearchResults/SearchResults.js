import React, { useEffect, useContext } from 'react';
import { DataContext } from '../../components/DataContext/DataContext'
import SearchResult from '../../components/SearchResult/SearchResult';
import './SearchResults.css';

const SearchResults = () => {

    let responseArray = [];
    let searchParam = "";

    const { events, setEvents, searchString, setSearchString } = useContext(DataContext);

    useEffect(() => {
        console.log("searchString inside useEffect:", searchString);
        getSearchResults(searchString);
    }, []);

    const getSearchResults = (string) => {

        const baseUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_API_KEY}`
        const url = `${baseUrl}&keyword=${string}&locale=*&size=20`;

        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.warn("API call Success!", res._embedded.events);

                responseArray = res._embedded.events

                if(res) {
                    setEvents(responseArray)
                    console.warn("events state is now updated to:", events);
                }

                setSearchString('');
            })

            .catch(console.error);
    }

    let eventRow = events.map((event, index) => {
        return (
            <SearchResult
                dataObject = {event}
                key = {event.id}
            />
        )
    })
    // .sort(function(a, b){
    //     return new Date(b.dates.start.dateTime) - new Date(a.dates.start.dateTime)
    // })

    return (
        <div className="search-results-screen">
            <h1>{searchParam}</h1>
            <h3>Tickets</h3>

            <table class="ui selectable table">
                <thead>
                    <th className="thead thead-pic"></th>
                    <th className="thead thead-date">Date</th>
                    <th className="thead thead-event">Event</th>
                    <th className="thead thead-price">Price</th>
                    <th className="thead thead-id">ID</th>
                </thead>
                <tbody>
                    {eventRow}
                </tbody>
            </table>
        </div>
    )
}

export default SearchResults;
