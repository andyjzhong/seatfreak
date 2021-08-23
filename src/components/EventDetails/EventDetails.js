import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../components/DataContext/DataContext'
import TicketTable from '../../components/TicketTable/TicketTable';
import Modal from '../../components/Modal/Modal';
import moment from 'moment';
import './EventDetails.css';

const EventDetails = (props) => {

    let eventId = props.match.params.id;

    const [eventDetail, setEventDetail] = useState();
    const { width } = useContext(DataContext);

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

    const [displayModal, setDisplayModal] = useState("false");

    const showModal = () => {
        console.log("BANANAS");
        setDisplayModal("true");
    }


    if(eventDetail) {
        return (
            <div className="event-details">
                <h1 className="event-details-title">{ eventDetail.name }</h1>
                <h3> { moment(eventDetail.dates.start.localDate).format("ddd")}, { moment(eventDetail.dates.start.localDate).format("MMM D") }, { moment(eventDetail.dates.start.dateTime).format("h:mma") }</h3>
                <h3 className="event-details-venue">{ eventDetail._embedded.venues[0].name }</h3>

                {(displayModal === "true") ? <Modal /> : null }

                <div className={(width <= 800) ? `ui event-details-content` : `ui two column grid event-details-content`}>
                    <div className={(width <= 800) ? `ui event-details-col` : `ui eight wide column event-details-col`}>
                        <img alt="" className="seatmap" src={eventDetail.seatmap.staticUrl} style={{width: "100%"}}/>
                    </div>
                    <div className={(width <= 800) ? `ui event-details-col` : `ui eight wide column event-details-col`} style={(width <= 800) ? {padding: "1em"} : {padding: "3rem"}}>
                        <div>
                            <TicketTable
                                eventInfo={eventDetail}
                                showModal={showModal}
                                setDisplayModal={setDisplayModal}
                                displayModal={displayModal}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return <h2>Please wait.</h2>
    }
}

export default EventDetails;
