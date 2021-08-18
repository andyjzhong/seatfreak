import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchResult = (props) => {

    // const [performance, setPerformance] = useState();
    console.log("PROPS IS::", props.dataObject);

    return (
        <tr className="search-result">
            <td>
                <Link to={`/search/${props.dataObject.id}`} key={props.dataObject.id}>
                    <div><strong>{props.dataObject.dates.start.localDate}</strong></div>
                    <div>Fri - 7:10pm</div>
                </Link>
            </td>
            <td>
                <Link to={`/search/${props.dataObject.id}`} key={props.dataObject.id}>
                    <div><strong>{props.dataObject.name}</strong></div>
                    <div>{props.dataObject._embedded.venues[0].name}</div>
                </Link>
            </td>
            {props.dataObject.priceRanges ? <td>
                <Link to={`/search/${props.dataObject.id}`} key={props.dataObject.id}>
                    <button className="ui secondary button">From ${props.dataObject.priceRanges[0].min}</button>
                </Link>
            </td> : <td>Sold Out!</td>}
            <td>{props.dataObject.id}</td>
        </tr>
    )
}

export default SearchResult;
