import React, { useContext } from 'react';
import { DataContext } from '../../components/DataContext/DataContext'
import { Link } from 'react-router-dom';
import moment from 'moment';

const SearchResult = (props) => {

    const { setCurrentPic, width } = useContext(DataContext);

    const handleHover = (e) => {
        setCurrentPic(props.dataObject._embedded.venues[0].images[0].url);

    }

    const showNoPicture = () => {
        console.log("No picture.");
        setCurrentPic("https://i.imgur.com/jzBpkyi.jpg");
    }

    if (props.dataObject._embedded.venues[0].images) {
        return (
            <tr className="search-result" onMouseOver={handleHover}>
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
                        <button className="ui secondary button" style={(width <= 800) ? {width: "100%"} : {width: "8rem"}}>From ${Math.ceil(props.dataObject.priceRanges[0].min)}</button>
                    </Link>
                </td> : <td><button className="ui disabled secondary button" style={(width <= 800) ? {width: "100%"} : {width: "8rem"}}>Unavailable</button></td>}
            </tr>
        )
    } else {
        return (
            <tr className="search-result" onMouseOver={showNoPicture}>
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
                        <button className="ui secondary button" style={(width <= 800) ? {width: "100%"} : {width: "8rem"}}>From ${Math.ceil(props.dataObject.priceRanges[0].min)}</button>
                    </Link>
                </td> : <td><button className="ui disabled secondary button" style={(width <= 800) ? {width: "100%"} : {width: "8rem"}}>Unavailable</button></td>}
            </tr>
        )
    }


}

export default SearchResult;
