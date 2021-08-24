import React, { useEffect, useContext } from 'react';
import { DataContext } from '../../components/DataContext/DataContext'
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import moment from 'moment';
import './Home.css';

const Home = () => {

    const {searchString, setSearchString, setLastSearch, previewState, setPreviewState, location, latLon, width} = useContext(DataContext);
    let responseArray = [];

    useEffect((latLon) => {
        getPreviewData(latLon);
    }, [latLon]);

    const getPreviewData = (string) => {

        const baseUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_API_KEY}`
        const url = `${baseUrl}&latlong=${latLon}&radius=50&locale=*&size=4`;

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
        setSearchString(e.target.value)
        setLastSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleMouseEnter = (e) => {
        e.currentTarget.style.transition = "transform 0.25s ease-in-out";
        e.currentTarget.style.transform = "scale(1.1)";
    }

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transition = "transform 0.25s ease-in-out";
        e.currentTarget.style.transform = "scale(1.0)";
    }

    return (
        <div className="home-screen" style={(width <= 800) ? {height: "330vh"} : {height: "150vh"}}>
            <h1 className="landing-title tracking-in-contract" style={(width <= 415) ? {paddingTop: "50%"} : {paddingTop: "20%"}}>Welcome to SeatFreak!</h1>
            <h4 className="landing-remark">Remember concerts? Yeah we've gotchu.</h4>
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="ui input left icon">
                    <input className="search-bar" type="text" placeholder="Performer, Event, Venue" onChange={handleChange} value={searchString}/>
                    <i className="search icon"></i>
                </div>
                <Link to={`/search`}>
                    <button className="search-button ui button" type="submit" style={{backgroundColor: "#FFE459"}}><i className="search icon"></i></button>
                </Link>
            </form>

            <h2 className="trending-locale">Trending Events near {location}</h2>
            <div className={(width <= 800) ? `ui preview-events` : `ui four column grid preview-events`}>
                <div className="four column row preview-row">
                    {(previewState.length > 0) ?
                    <div className="column" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Link to={`/search/${previewState[0].id}`} key={previewState[0].id}>

                            {(previewState[0].priceRanges) ?
                                <Card
                                    name={previewState[0].name}
                                    day={moment(previewState[0].dates.start.localDate).format("ddd")}
                                    date={moment(previewState[0].dates.start.localDate).format("MMM D")}
                                    time={moment(previewState[0].dates.start.dateTime).format("h:mma")}
                                    venue={previewState[0]._embedded.venues[0].name}
                                    image={previewState[0].images[0].url}
                                    price={`Price Range: $${previewState[0].priceRanges[0].min} - ${previewState[0].priceRanges[0].max}`}
                                /> :
                                <Card
                                    name={previewState[0].name}
                                    day={moment(previewState[0].dates.start.localDate).format("ddd")}
                                    date={moment(previewState[0].dates.start.localDate).format("MMM D")}
                                    time={moment(previewState[0].dates.start.dateTime).format("h:mma")}
                                    venue={previewState[0]._embedded.venues[0].name}
                                    image={previewState[0].images[0].url}
                                    price={`Unavailable`}
                                />
                            }

                        </Link>
                    </div> : <Card />}
                    {(previewState.length > 0) ?
                    <div className="column" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Link to={`/search/${previewState[1].id}`} key={previewState[1].id}>

                            {(previewState[1].priceRanges) ?
                                <Card
                                    name={previewState[1].name}
                                    day={moment(previewState[1].dates.start.localDate).format("ddd")}
                                    date={moment(previewState[1].dates.start.localDate).format("MMM D")}
                                    time={moment(previewState[1].dates.start.dateTime).format("h:mma")}
                                    venue={previewState[1]._embedded.venues[0].name}
                                    image={previewState[1].images[0].url}
                                    price={`Price Range: $${previewState[1].priceRanges[0].min} - ${previewState[1].priceRanges[0].max}`}
                                /> :
                                <Card
                                    name={previewState[1].name}
                                    day={moment(previewState[1].dates.start.localDate).format("ddd")}
                                    date={moment(previewState[1].dates.start.localDate).format("MMM D")}
                                    time={moment(previewState[1].dates.start.dateTime).format("h:mma")}
                                    venue={previewState[1]._embedded.venues[0].name}
                                    image={previewState[1].images[0].url}
                                    price={`Unavailable`}
                                />
                            }

                        </Link>
                    </div> : <Card />}
                    {(previewState.length > 0) ?
                    <div className="column" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Link to={`/search/${previewState[2].id}`} key={previewState[2].id}>
                            {(previewState[2].priceRanges) ?
                                <Card
                                    name={previewState[2].name}
                                    day={moment(previewState[2].dates.start.localDate).format("ddd")}
                                    date={moment(previewState[2].dates.start.localDate).format("MMM D")}
                                    time={moment(previewState[2].dates.start.dateTime).format("h:mma")}
                                    venue={previewState[2]._embedded.venues[0].name}
                                    image={previewState[2].images[0].url}
                                    price={`Price Range: $${previewState[2].priceRanges[0].min} - ${previewState[2].priceRanges[0].max}`}
                                /> :
                                <Card
                                    name={previewState[2].name}
                                    day={moment(previewState[2].dates.start.localDate).format("ddd")}
                                    date={moment(previewState[2].dates.start.localDate).format("MMM D")}
                                    time={moment(previewState[2].dates.start.dateTime).format("h:mma")}
                                    venue={previewState[2]._embedded.venues[0].name}
                                    image={previewState[2].images[0].url}
                                    price={`Unavailable`}
                                />
                            }
                        </Link>
                    </div> : <Card />}
                    {(previewState.length > 0) ?
                    <div className="column" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Link to={`/search/${previewState[3].id}`} key={previewState[3].id}>
                            {(previewState[3].priceRanges) ?
                                <Card
                                    name={previewState[3].name}
                                    day={moment(previewState[3].dates.start.localDate).format("ddd")}
                                    date={moment(previewState[3].dates.start.localDate).format("MMM D")}
                                    time={moment(previewState[3].dates.start.dateTime).format("h:mma")}
                                    venue={previewState[3]._embedded.venues[0].name}
                                    image={previewState[3].images[0].url}
                                    price={`Price Range: $${previewState[3].priceRanges[0].min} - ${previewState[0].priceRanges[0].max}`}
                                /> :
                                <Card
                                    name={previewState[3].name}
                                    day={moment(previewState[3].dates.start.localDate).format("ddd")}
                                    date={moment(previewState[3].dates.start.localDate).format("MMM D")}
                                    time={moment(previewState[3].dates.start.dateTime).format("h:mma")}
                                    venue={previewState[3]._embedded.venues[0].name}
                                    image={previewState[3].images[0].url}
                                    price={`Unavailable`}
                                />
                            }
                        </Link>
                    </div> : <Card />}
                </div>
            </div>
        </div>
    )
}

export default Home;
