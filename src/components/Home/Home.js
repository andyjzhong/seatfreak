import React, { useContext } from 'react';
import { DataContext } from '../../components/DataContext/DataContext'
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card'
import './Home.css';

const Home = () => {

    const {searchString, setSearchString, lastSearch, setLastSearch} = useContext(DataContext);

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
                    <i class="search icon"></i>
                </div>
                <Link to={`/search`}>
                    <button className="search-button ui button" type="submit" style={{backgroundColor: "#FFE459"}}><i class="search icon"></i></button>
                </Link>
            </form>

            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Home;
