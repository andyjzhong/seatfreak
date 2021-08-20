import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { DataContext } from './components/DataContext/DataContext'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SearchResults from './components/SearchResults/SearchResults';
import EventDetails from './components/EventDetails/EventDetails';
import Footer from './components/Footer/Footer';
import './App.css';

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

const getLocation = () => {
    console.log("ran");
    window.navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
}

const onGeoSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    console.log("SUCCESS!", `${latitude},${longitude}`);
}

const onGeoError = () => {
    console.log("FAILED TO GET LOCATION");
}

function App() {

    const [searchString, setSearchString] = useState("");
    const [lastSearch, setLastSearch] = useState("");
    const [events, setEvents] = useState([]);
    const [previewState, setPreviewState] = useState([]);
    const [currentPic, setCurrentPic] = useState()
    const { height, width } = useWindowDimensions();

    useEffect(() => {
        getLocation(searchString);
    },[]);

    return (
        <div className="App">
            <DataContext.Provider
                value = {{ events, setEvents, searchString, setSearchString, lastSearch, setLastSearch, previewState, setPreviewState, currentPic, setCurrentPic, width, height }}
            >
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={SearchResults} />
                <Route path="/search/:id" component={EventDetails} />
                <Footer />
                <p style={{color: "red"}}>Height = {height}, Width = {width}</p>
            </DataContext.Provider>
        </div>
    );
}

export default App;
