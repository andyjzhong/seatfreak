import React, { useState } from 'react';

const SearchResult = (props) => {

    // const [performance, setPerformance] = useState();
    console.log("PROPS IS::", props.dataObject);

    return (
        <div className="search-result">
            <table class="ui single line table">
                <thead>
                    <th>Date</th>
                    <th>Event</th>
                    <th>Price</th>
                    <th>ID</th>
                </thead>
                <tbody>
                    <td>{props.dataObject.dates.start.localDate}</td>
                    <td>{props.dataObject.name}</td>
                    <td>{props.dataObject.priceRanges[0].min}</td>
                    <td>{props.dataObject.id}</td>
                </tbody>
            </table>
        </div>
    )
}

export default SearchResult;
