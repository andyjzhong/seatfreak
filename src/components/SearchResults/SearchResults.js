import React, { useEffect, useContext } from 'react';
import { DataContext } from '../../components/DataContext/DataContext'
import SearchResult from '../../components/SearchResult/SearchResult';
import moment from 'moment';
import './SearchResults.css';

const SearchResults = () => {

    let responseArray = [];

    const { events, setEvents, searchString, setSearchString, lastSearch } = useContext(DataContext);

    useEffect(() => {
        getSearchResults(searchString);
    }, []);

    const getSearchResults = (string) => {

        const baseUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_API_KEY}`
        const url = `${baseUrl}&keyword=${string}&locale=*&size=4`;

        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.warn("API call Success!", res._embedded.events);

                responseArray = res._embedded.events

                responseArray.sort(function(a, b){
                    return moment(a.dates.start.localDate).format("YYYYMMDD") - moment(b.dates.start.localDate).format("YYYYMMDD")
                })

                if(res) {
                    setEvents(responseArray)
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

    return (
        <div className="search-results-screen">
            <h1>{lastSearch}</h1>
            <h3>Tickets</h3>

            <table class="ui selectable table">
                <thead>
                    <th className="thead thead-pic"></th>
                    <th className="thead thead-date">Date</th>
                    <th className="thead thead-event">Event</th>
                    <th className="thead thead-price">Price</th>
                    <th className="thead thead-id">ID</th>
                    <th className="thead thead-id">Timestamp</th>
                </thead>
                <tbody>
                    {eventRow}
                </tbody>
            </table>
        </div>
    )
}

export default SearchResults;
