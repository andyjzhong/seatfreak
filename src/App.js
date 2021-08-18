import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SearchResults from './components/SearchResults/SearchResults';
import EventDetails from './components/EventDetails/EventDetails';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Welcome to SeatFreak!</h1>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchResults} />
        <Route path="/search/:id" component={EventDetails} />
    </div>
  );
}

export default App;
