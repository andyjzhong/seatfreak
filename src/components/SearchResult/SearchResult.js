import React from 'react';

const SearchResult = (props) => {
    return (
        <div className="home-screen">
            Event: {props.name}
            ID: {props.id}
        </div>
    )
}

export default SearchResult;
