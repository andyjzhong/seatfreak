import React, { useEffect } from 'react';

const EventDetails = (props) => {
    useEffect(() => {
        getEventDetails();
    }, []);

    const getEventDetails = () => {
        console.log("Inside getEventDetails")
    }

    console.log("ID in event is:", props.match.params);
    return (
        <div className="event-details">
            { props.match.params.id }
        </div>
    )
}

export default EventDetails;
