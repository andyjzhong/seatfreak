import React, { useContext } from 'react';
import { DataContext } from '../../components/DataContext/DataContext'
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card'
import './Home.css';

const Home = () => {

    const {searchString, setSearchString} = useContext(DataContext);

    const handleChange = (e) => {
        console.log(e.target.value);
        setSearchString(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Clicked a button!");
    }

    return (
        <div className="home-screen">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="ui input">
                    <input className="search-bar" type="text" placeholder="Search" onChange={handleChange} value={searchString}/>
                </div>
                <Link to={`/search`}>
                    <button className="search-button ui button" type="submit">Search</button>
                </Link>
            </form>

            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Home;
