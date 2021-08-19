import React, { useState, useEffect } from 'react';

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

    console.log(eventDetail);

    if(eventDetail) {
        let venueUrl = eventDetail.url.toString();

        return (
            <div className="event-details">
                <p>{ props.match.params.id }</p>
                <p>{ eventDetail.name }</p>
                <p>{ venueUrl }</p>
                <img alt="" src={venueUrl} />
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
