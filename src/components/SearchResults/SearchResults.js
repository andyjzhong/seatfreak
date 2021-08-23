import React, { useEffect, useContext } from 'react';
import { DataContext } from '../../components/DataContext/DataContext'
import SearchResult from '../../components/SearchResult/SearchResult';
import moment from 'moment';
import './SearchResults.css';

const SearchResults = () => {

    const { events, setEvents, searchString, setSearchString, lastSearch, currentPic, setCurrentPic, width } = useContext(DataContext);
    let responseArray = [];
    // let lastSearchFirstLetter = lastSearch.split("")[0].toUpperCase();
    // let lastSearchDroppedLetter = lastSearch.split("").splice(0, 1, lastSearchFirstLetter);
    // console.log("lastSearchFirstLetter", lastSearchFirstLetter);
    // console.log("lastSearchDroppedLetter", lastSearchDroppedLetter);

    useEffect(() => {
        getSearchResults(searchString);
    },[]);

    const getSearchResults = (string) => {

        const baseUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_API_KEY}`
        const url = `${baseUrl}&keyword=${string}&locale=*&size=40`;

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
                    setCurrentPic(responseArray[0]._embedded.venues[0].images[0].url)
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
        <div className={(width <= 415) ? `ui search-results-screen` : `ui two column grid search-results-screen`}>

            <div className="ui nine wide column">
                <h3 className="all-events-text">All Events</h3>
                <div class="ui divider"></div>
                <table class="ui selectable table search-table">
                    <thead>
                        <th className="thead thead-pic"></th>
                        <th className="thead thead-date">Date</th>
                        <th className="thead thead-event">Event</th>
                        <th className="thead thead-price"></th>
                    </thead>
                    <tbody>
                        {eventRow}
                    </tbody>
                </table>
            </div>

            <div className="ui seven wide column">
                <h3>Displaying Results for:</h3>
                <h1 className="search-screen-header">{lastSearch}</h1>
                <img className="preview-image" alt="" src={currentPic}/>
            </div>
        </div>
    )
}

export default SearchResults;
