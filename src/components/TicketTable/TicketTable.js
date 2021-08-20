import React from 'react';
import './TicketTable.css';

const TicketTable = (props) => {
    return (
        <table class="ui selectable table">
            <thead>
                <th className="thead thead-pic">Section</th>
                <th className="thead thead-date">Row</th>
                <th className="thead thead-event"># Tickets</th>
                <th className="thead thead-id">Deal Score</th>
                <th className="thead thead-price">Price</th>
            </thead>
            <tbody>
                <tr>
                    <td>Right Field Grandstand 7</td>
                    <td>Row 9</td>
                    <td>1-8 tickets</td>
                    <td>Amazing!</td>
                    <td><button className="ui secondary button" style={{width: "8rem"}}>$84/ea</button></td>
                </tr>
                <tr>
                    <td>Right Field Grandstand 7</td>
                    <td>Row 9</td>
                    <td>1-8 tickets</td>
                    <td>Amazing!</td>
                    <td><button className="ui secondary button" style={{width: "8rem"}}>$84/ea</button></td>
                </tr>
                <tr>
                    <td>Right Field Grandstand 7</td>
                    <td>Row 9</td>
                    <td>1-8 tickets</td>
                    <td>Amazing!</td>
                    <td><button className="ui secondary button" style={{width: "8rem"}}>$84/ea</button></td>
                </tr>
            </tbody>
        </table>
    )
}

export default TicketTable;
