import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../components/DataContext/DataContext'
import SearchResult from '../../components/SearchResult/SearchResult';
import moment from 'moment';
import './SearchResults.css';

const SearchResults = () => {

    const { events, setEvents, searchString, setSearchString, lastSearch, currentPic, setCurrentPic, width } = useContext(DataContext);
    let responseArray = [];

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

    if (events.length < 1) {
        return (
            <div className="no-results" style={(width <= 800) ? {padding: "20rem 0"} : {padding: "20rem"}}>
                <h3>Displaying Results for:</h3>
                <h1 className="search-screen-header">{lastSearch}</h1>
                <div className="ui divider"></div>
                <h4>No results found. You sure you typed that correctly?</h4>
                <Link to={`/`}>
                    <h5 className="back-to-home">Back to SeatFreak</h5>
                </Link>
            </div>
        )
    }

    return (
        <div
            className={(width <= 800) ? `ui search-results-screen` : `ui two column grid search-results-screen`}
            style={(width <= 800) ? {margin: "0 auto"} : {margin: "10vh"}}
        >

            <div className="ui seven wide column" style={(width < 800) ? {display: "", paddingTop: "100px", paddingBottom: "20px"} : {display: "none"}}>
                <h3>Displaying Results for:</h3>
                <h1 className="search-screen-header">{lastSearch}</h1>
                <img className="preview-image" alt="" src={currentPic} style={(width <= 800) ? {width: "80%", height: "12em"} : {width: "30em", height: "18em"}}/>
            </div>

            <div className="ui nine wide column">
                <h3 className="all-events-text">All Events</h3>
                <div className="ui divider"></div>
                <table className="ui selectable table search-table">
                    <thead style={(width <= 800) ? {display: "none"} : {display: ""}}>
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

            <div className="ui seven wide column" style={(width <= 800) ? {display: "none"} : {display: ""}}>
                <h3>Displaying Results for:</h3>
                <h1 className="search-screen-header">{lastSearch}</h1>
                <img className="preview-image" alt="" src={currentPic} style={{border: "1px solid #1F1F1F"}}/>
            </div>
        </div>
    )
}

export default SearchResults;
