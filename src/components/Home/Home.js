import React, { useEffect, useContext } from 'react';
import { DataContext } from '../../components/DataContext/DataContext'
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import moment from 'moment';
import './Home.css';

const Home = () => {

    const {searchString, setSearchString, lastSearch, setLastSearch, previewState, setPreviewState} = useContext(DataContext);
    let responseArray = [];

    useEffect(() => {
        getPreviewData();
    },[]);

    const getPreviewData = (string) => {

        const baseUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_API_KEY}`
        const url = `${baseUrl}&latlong=42.4234565,-71.6308593&locale=*&size=4`;

        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.warn("API call Success!", res._embedded.events);

                responseArray = res._embedded.events
                responseArray.sort(function(a, b){
                    return moment(a.dates.start.localDate).format("YYYYMMDD") - moment(b.dates.start.localDate).format("YYYYMMDD")
                })

                setPreviewState(responseArray);
            })

            .catch(console.error);
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setSearchString(e.target.value)
        setLastSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Clicked a button!");
    }

    return (
        <div className="home-screen">
            <h1 className="landing-title">Welcome to SeatFreak!</h1>
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="ui input left icon">
                    <input className="search-bar" type="text" placeholder="Performer, Event, Venue" onChange={handleChange} value={searchString}/>
                    <i className="search icon"></i>
                </div>
                <Link to={`/search`}>
                    <button className="search-button ui button" type="submit" style={{backgroundColor: "#FFE459"}}><i className="search icon"></i></button>
                </Link>
            </form>

            <h2>Trending Events</h2>
            <div className="ui four column grid preview-events">
                <div className="four column row preview-row">
                    {(previewState.length > 0) ? <div className="column"><Card
                        name={previewState[0].name}
                        day={moment(previewState[0].dates.start.localDate).format("ddd")}
                        date={moment(previewState[0].dates.start.localDate).format("MMM D")}
                        time={moment(previewState[0].dates.start.dateTime).format("h:mma")}
                        venue={previewState[0]._embedded.venues[0].name}
                        image={previewState[0].images[0].url}
                        price={previewState[0].priceRanges[0].min}
                    /></div> : <Card />}
                    {(previewState.length > 0) ? <div className="column"><Card
                        name={previewState[1].name}
                        day={moment(previewState[1].dates.start.localDate).format("ddd")}
                        date={moment(previewState[1].dates.start.localDate).format("MMM D")}
                        time={moment(previewState[1].dates.start.dateTime).format("h:mma")}
                        venue={previewState[1]._embedded.venues[0].name}
                        image={previewState[1].images[0].url}
                        price={previewState[1].priceRanges[0].min}
                    /></div> : <Card />}
                    {(previewState.length > 0) ? <div className="column"><Card
                        name={previewState[2].name}
                        day={moment(previewState[2].dates.start.localDate).format("ddd")}
                        date={moment(previewState[2].dates.start.localDate).format("MMM D")}
                        time={moment(previewState[2].dates.start.dateTime).format("h:mma")}
                        venue={previewState[2]._embedded.venues[0].name}
                        image={previewState[2].images[0].url}
                        price={(false) ? previewState[2].priceRanges[0].min : 0}
                    /></div> : <Card />}
                    {(previewState.length > 0) ? <div className="column"><Card
                        name={previewState[3].name}
                        day={moment(previewState[3].dates.start.localDate).format("ddd")}
                        date={moment(previewState[3].dates.start.localDate).format("MMM D")}
                        time={moment(previewState[3].dates.start.dateTime).format("h:mma")}
                        venue={previewState[3]._embedded.venues[0].name}
                        image={previewState[3].images[0].url}
                        price={(false) ? previewState[2].priceRanges[0].min : 0}
                    /></div> : <Card />}
                </div>
            </div>
        </div>
    )
}

export default Home;
