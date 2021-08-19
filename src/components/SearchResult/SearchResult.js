import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const SearchResult = (props) => {

    return (
        <tr className="search-result">
            <td>
                <img alt="" src={props.dataObject.images[0].url} style={{width: "60px"}}/>
            </td>
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
                    <button className="ui secondary button" style={{width: "8rem"}}>From ${Math.ceil(props.dataObject.priceRanges[0].min)}</button>
                </Link>
            </td> : <td><button className="ui disabled secondary button" style={{width: "8rem"}}>Sold Out!</button></td>}
            <td>{props.dataObject.id}</td>
            <td>{moment(props.dataObject.dates.start.dateTime).format("YYYYMMDD").toString()}</td>
        </tr>
    )
}

export default SearchResult;
