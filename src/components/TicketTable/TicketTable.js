import React from 'react';
import './TicketTable.css';

const TicketTable = ({ eventDetail }) => {
    return (
        <table className="ui selectable table">
            <thead>
                <th className="thead thead-section">Section</th>
                <th className="thead thead-row">Row</th>
                <th className="thead thead-count"># Tickets</th>
                <th className="thead thead-score">Deal Score</th>
                <th className="thead thead-price"></th>
            </thead>
            <tbody>
                <tr>
                    <td>Standing Room Only (SRO)</td>
                    <td>SRO</td>
                    <td>1-8 tickets</td>
                    <td>
                        <button className="ui orange image label deal-score">
                            Average
                        </button>
                    </td>
                    <td><button className="ui secondary button" style={{width: "8rem"}}>$84/ea</button></td>
                </tr>
                <tr>
                    <td>General Admission (GA)</td>
                    <td>GA</td>
                    <td>1-8 tickets</td>
                    <td className="deal-score-col">
                        <button className="ui green image label deal-score">
                            Amazing!
                        </button>
                    </td>
                    <td><button className="ui secondary button" style={{width: "8rem"}}>$84/ea</button></td>
                </tr>
                <tr>
                    <td>Premier Section</td>
                    <td>1</td>
                    <td>1-8 tickets</td>
                    <td className="deal-score-col">
                        <button className="ui blue image label deal-score">
                            Good
                        </button>
                    </td>
                    <td><button className="ui secondary button" style={{width: "8rem"}}>$84/ea</button></td>
                </tr>
            </tbody>
        </table>
    )
}

export default TicketTable;
