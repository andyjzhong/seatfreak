import React, { useState } from 'react';

const SearchResult = (props) => {

    const [performance, setPerformance] = useState();

    return (
        <div className="home-screen">
            <h4>Event: {props.name}</h4>
            <p>ID: {props.performanceId}</p>
        </div>
    )
}

export default SearchResult;
