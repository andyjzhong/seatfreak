import React, { useState } from 'react';

const SearchResult = (props) => {

    // const [performance, setPerformance] = useState();
    console.log("PROPS IS::", props.dataObject);

    return (
        <tr className="search-result">
            <td>
                <div><strong>{props.dataObject.dates.start.localDate}</strong></div>
                <div>Fri - 7:10pm</div>
            </td>
            <td>
                <div><strong>{props.dataObject.name}</strong></div>
                <div>{props.dataObject._embedded.venues[0].name}</div>
            </td>
            {props.dataObject.priceRanges ? <td><button className="ui secondary button">From ${props.dataObject.priceRanges[0].min}</button></td> : <td>Sold Out!</td>}
            <td>{props.dataObject.id}</td>
        </tr>
    )
}

export default SearchResult;
