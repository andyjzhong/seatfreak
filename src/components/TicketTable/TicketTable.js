import React, { useContext } from 'react';
import { DataContext } from '../../components/DataContext/DataContext'
import './TicketTable.css';

const TicketTable = ({ eventDetail, showModal, setDisplayModal }) => {

    const { width } = useContext(DataContext);

    return (
        <table className="ui selectable table">
            <thead style={(width <= 800) ? {display: "none"} : {display: ""}}>
                <th className="thead thead-section">Section</th>
                <th className="thead thead-row">Row</th>
                <th className="thead thead-count"># Tickets</th>
                <th className="thead thead-score">Deal Score</th>
                <th className="thead thead-price"></th>
            </thead>
            <tbody>
                <tr>
                    <td>General Admission (GA)</td>
                    <td>GA</td>
                    <td>1-8 tickets</td>
                    <td className="deal-score-col">
                        <button className="ui green image label deal-score">
                            Amazing!
                        </button>
                    </td>
                    <td style={(width <= 800) ? {textAlign: "right"} : {textAlign: "center"}}>
                        <button className="ui secondary button" style={(width <= 800) ? {width: "100%"} : {width: "8rem"}}>$84/ea</button>
                    </td>
                </tr>
                <tr>
                    <td>Premier Seating</td>
                    <td>Row 1</td>
                    <td>1-8 tickets</td>
                    <td className="deal-score-col">
                        <button className="ui blue image label deal-score">
                            Good
                        </button>
                    </td>
                    <td style={(width <= 800) ? {textAlign: "right"} : {textAlign: "center"}}>
                        <button className="ui secondary button" style={(width <= 800) ? {width: "100%"} : {width: "8rem"}}>$84/ea</button>
                    </td>
                </tr>
                <tr>
                    <td>Gold Premier Seating</td>
                    <td>Row 1</td>
                    <td>1-8 tickets</td>
                    <td className="deal-score-col">
                        <button className="ui blue image label deal-score">
                            Good
                        </button>
                    </td>
                    <td style={(width <= 800) ? {textAlign: "right"} : {textAlign: "center"}}>
                        <button className="ui secondary button" style={(width <= 800) ? {width: "100%"} : {width: "8rem"}}>$84/ea</button>
                    </td>
                </tr>
                <tr>
                    <td>Platinum Premier Seating</td>
                    <td>Row 3</td>
                    <td>1-8 tickets</td>
                    <td className="deal-score-col">
                        <button className="ui blue image label deal-score">
                            Good
                        </button>
                    </td>
                    <td style={(width <= 800) ? {textAlign: "right"} : {textAlign: "center"}}>
                        <button className="ui secondary button" style={(width <= 800) ? {width: "100%"} : {width: "8rem"}}>$84/ea</button>
                    </td>
                </tr>
                <tr>
                    <td>Lower Level</td>
                    <td>Row 2</td>
                    <td>1-8 tickets</td>
                    <td className="deal-score-col">
                        <button className="ui blue image label deal-score">
                            Good
                        </button>
                    </td>
                    <td style={(width <= 800) ? {textAlign: "right"} : {textAlign: "center"}}>
                        <button className="ui secondary button" style={(width <= 800) ? {width: "100%"} : {width: "8rem"}}>$84/ea</button>
                    </td>
                </tr>
                <tr>
                    <td>Upper Level</td>
                    <td>Row 3</td>
                    <td>1-8 tickets</td>
                    <td className="deal-score-col">
                        <button className="ui blue image label deal-score">
                            Good
                        </button>
                    </td>
                    <td style={(width <= 800) ? {textAlign: "right"} : {textAlign: "center"}}>
                        <button className="ui secondary button" style={(width <= 800) ? {width: "100%"} : {width: "8rem"}}>$84/ea</button>
                    </td>
                </tr>
                <tr>
                    <td>Standing Room Only (SRO)</td>
                    <td>SRO</td>
                    <td>1-8 tickets</td>
                    <td>
                        <button className="ui orange image label deal-score">
                            Average
                        </button>
                    </td>
                    <td style={(width <= 800) ? {textAlign: "right"} : {textAlign: "center"}}>
                        <button className="ui secondary button" style={(width <= 800) ? {width: "100%"} : {width: "8rem"}}>$84/ea</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TicketTable;
