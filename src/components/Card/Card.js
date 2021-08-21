import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="ui card whole-card">
            <div className="image card-image">
                <img alt="" src={props.image}/>
            </div>
            <div className="content card-content">
                <a className="header card-header" href="/">{props.name}</a>
                <div className="meta">
                    <span className="date">{props.day}, {props.date}, {props.time}</span>
                    <p>{props.venue}</p>
                </div>
                <div className="description">
                    {props.price}
                </div>
            </div>
        </div>
    )
}

export default Card;
