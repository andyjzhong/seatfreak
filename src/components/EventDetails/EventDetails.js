import React, { useState, useEffect } from 'react';
import moment from 'moment';

const EventDetails = (props) => {

    let eventId = props.match.params.id;

    const [eventDetail, setEventDetail] = useState({});

    useEffect(() => {
        getEventDetails();
    },[]);

    const getEventDetails = () => {
        const url = `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${process.env.REACT_APP_API_KEY}&locale=*`

        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log("EVENT DETAIL OBJECT:", res);
                setEventDetail(res);
                console.log("eventDetail State is", eventDetail);
            })
            .catch(console.error);
    }

    // console.log(eventDetail.seatmap.staticUrl);

    if(eventDetail) {
        return (
            <div className="event-details">
                <p>{ props.match.params.id }</p>
                <p>{ eventDetail.name }</p>
                <p>{ moment(eventDetail.dates.start.localDate).format("ddd") }</p>
                <p>{ moment(eventDetail.dates.start.localDate).format("MMM D") }</p>
                <p>{ moment(eventDetail.dates.start.dateTime).format("h:mma") }</p>
                <img alt="" src={eventDetail.seatmap.staticUrl} />
            </div>
        )
    } else {
        return (
            <div>Loading.</div>
        )
    }

}

export default EventDetails;
            // <img alt="" src={ eventDetail.url }/>
            // <p>{ eventDetail.images[0].url }</p>
            // <img alt="" src={eventDetail.images[0].url}/>
