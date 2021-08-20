import React, { useState, useEffect } from 'react';
import TicketTable from '../../components/TicketTable/TicketTable';
import moment from 'moment';
import './EventDetails.css';

const EventDetails = (props) => {

    let eventId = props.match.params.id;

    const [eventDetail, setEventDetail] = useState();

    useEffect(() => {
        getEventDetails();
    }, []);

    const getEventDetails = () => {
        const url = `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${process.env.REACT_APP_API_KEY}&locale=*`

        fetch(url)
            .then(res => res.json())
            .then(res => {
                setEventDetail(res);
                console.log("eventDetail State is", eventDetail);
            })
            .catch(console.error);
    }

    if(eventDetail) {
        return (
            <div className="event-details">
                <h1>{ eventDetail.name }</h1>
                <p>{ moment(eventDetail.dates.start.localDate).format("ddd") }</p>
                <p>{ moment(eventDetail.dates.start.localDate).format("MMM D") }</p>
                <p>{ moment(eventDetail.dates.start.dateTime).format("h:mma") }</p>
                <img alt="" className="seatmap" src={eventDetail.seatmap.staticUrl} />
                <div>
                    <TicketTable />
                </div>

            </div>
        )
    } else {
        return <h2>Please wait.</h2>
    }
}

export default EventDetails;
