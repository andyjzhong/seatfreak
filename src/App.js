import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { DataContext } from './components/DataContext/DataContext'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SearchResults from './components/SearchResults/SearchResults';
import EventDetails from './components/EventDetails/EventDetails';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

    const [searchString, setSearchString] = useState("");
    const [lastSearch, setLastSearch] = useState("");
    const [events, setEvents] = useState([]);
    const [previewState, setPreviewState] = useState([]);

    return (
        <div className="App">
            <DataContext.Provider
                value = {{ events, setEvents, searchString, setSearchString, lastSearch, setLastSearch, previewState, setPreviewState }}
            >
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={SearchResults} />
                <Route path="/search/:id" component={EventDetails} />
                <Footer />
            </DataContext.Provider>
        </div>
    );
}

export default App;
