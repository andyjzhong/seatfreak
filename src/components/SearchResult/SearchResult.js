import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const SearchResult = (props) => {

    return (
        <tr className="search-result">
            <td>
                <Link to={`/search/${props.dataObject.id}`} key={props.dataObject.id}>
                    <div><strong>{moment(props.dataObject.dates.start.localDate).format("MMM Do")}</strong></div>
                    <div>{moment(props.dataObject.dates.start.localDate).format("ddd")} {moment(props.dataObject.dates.start.dateTime).format("h:mma")}</div>
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
