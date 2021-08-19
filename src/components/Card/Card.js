import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div className="ui card">
            <div className="image">
                <img alt="" src=""/>
            </div>
            <div className="content card-content">
                <a className="header" href="/">Event Name</a>
                <div className="meta">
                    <span className="date">Event Date</span>
                </div>
                <div className="description">
                    Event Description
                </div>
            </div>
        </div>
    )
}

export default Card;
