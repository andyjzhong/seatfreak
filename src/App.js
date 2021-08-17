import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Hello World</h1>
        <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
