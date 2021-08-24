import React, { useContext } from 'react';
import { DataContext } from '../../components/DataContext/DataContext'
import { Button, Image, Modal, Select } from 'semantic-ui-react'
import './TicketTable.css';

const TicketTable = ({ eventDetail, showModal, setDisplayModal }) => {

    const { width } = useContext(DataContext);
    const [open, setOpen] = React.useState(false)

    console.log("eventDetail from TICKETTABLE", eventDetail);

    const ticketOptions = [
        { key: '1', value: '1', text: '1' },
        { key: '2', value: '2', text: '2' },
        { key: '3', value: '3', text: '3' },
        { key: '4', value: '4', text: '4' },
        { key: '5', value: '5', text: '5' },
        { key: '6', value: '6', text: '6' },
        { key: '7', value: '7', text: '7' },
        { key: '8', value: '8', text: '8' }
    ]

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
                    <Modal
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        trigger={<button className="ui secondary button" style={(width <= 800) ? {width: "100%"} : {width: "8rem"}}>$84/ea</button>}
                    >
                        <Modal.Header>Purchase Tickets</Modal.Header>
                        <Modal.Content image>
                            <Image size='medium' src='https://i.imgur.com/xiAA7q0.png' wrapped />
                            <Modal.Description>
                                <p>How many tickets would you like to purchase?</p>
                                <Select placeholder='Select number' options={ticketOptions} />
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button onClick={() => setOpen(false)}>Cancel</Button>
                            <Button onClick={() => setOpen(false)} positive>Confirm</Button>
                        </Modal.Actions>
                    </Modal>
                    </td>
                </tr>
                <tr>
                    <td>Premier Seating</td>
                    <td>Row {Math.floor(Math.random() * 10) + 1}</td>
                    <td>1-6 tickets</td>
                    <td className="deal-score-col">
                        <button className="ui green image label deal-score">
                            Amazing!
                        </button>
                    </td>
                    <td style={(width <= 800) ? {textAlign: "right"} : {textAlign: "center"}}>
                    <Modal
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        trigger={<button className="ui secondary button" style={(width <= 800) ? {width: "100%"} : {width: "8rem"}}>$84/ea</button>}
                    >
                        <Modal.Header>Purchase Tickets</Modal.Header>
                        <Modal.Content image>
                            <Image size='medium' src='https://i.imgur.com/xiAA7q0.png' wrapped />
                            <Modal.Description>
                                <p>How many tickets would you like to purchase?</p>
                                <Select placeholder='Select number' options={ticketOptions} />
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button onClick={() => setOpen(false)}>Cancel</Button>
                            <Button onClick={() => setOpen(false)} positive>Confirm</Button>
                        </Modal.Actions>
                    </Modal>
                    </td>
                </tr>
                <tr>
                    <td>Gold Premier Seating</td>
                    <td>Row {Math.floor(Math.random() * 10) + 1}</td>
                    <td>1-4 tickets</td>
                    <td className="deal-score-col">
                        <button className="ui blue image label deal-score">
                            Good
                        </button>
                    </td>
                    <td style={(width <= 800) ? {textAlign: "right"} : {textAlign: "center"}}>
                    <Modal
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        trigger={<button className="ui secondary button" style={(width <= 800) ? {width: "100%"} : {width: "8rem"}}>$84/ea</button>}
                    >
                        <Modal.Header>Purchase Tickets</Modal.Header>
                        <Modal.Content image>
                            <Image size='medium' src='https://i.imgur.com/xiAA7q0.png' wrapped />
                            <Modal.Description>
                                <p>How many tickets would you like to purchase?</p>
                                <Select placeholder='Select number' options={ticketOptions} />
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button onClick={() => setOpen(false)}>Cancel</Button>
                            <Button onClick={() => setOpen(false)} positive>Confirm</Button>
                        </Modal.Actions>
                    </Modal>
                    </td>
                </tr>
                <tr>
                    <td>Platinum Premier Seating</td>
                    <td>Row {Math.floor(Math.random() * 10) + 1}</td>
                    <td>1-4 tickets</td>
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
                    <td>Row {Math.floor(Math.random() * 10) + 10}</td>
                    <td>1-8 tickets</td>
                    <td className="deal-score-col">
                        <button className="ui blue image label deal-score">
                            Good
                        </button>
                    </td>
                    <td style={(width <= 800) ? {textAlign: "right"} : {textAlign: "center"}}>
                    <Modal
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        trigger={<button className="ui secondary button" style={(width <= 800) ? {width: "100%"} : {width: "8rem"}}>$84/ea</button>}
                    >
                        <Modal.Header>Purchase Tickets</Modal.Header>
                        <Modal.Content image>
                            <Image size='medium' src='https://i.imgur.com/xiAA7q0.png' wrapped />
                            <Modal.Description>
                                <p>How many tickets would you like to purchase?</p>
                                <Select placeholder='Select number' options={ticketOptions} />
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button onClick={() => setOpen(false)}>Cancel</Button>
                            <Button onClick={() => setOpen(false)} positive>Confirm</Button>
                        </Modal.Actions>
                    </Modal>
                    </td>
                </tr>
                <tr>
                    <td>Upper Level</td>
                    <td>Row {Math.floor(Math.random() * 20) + 10}</td>
                    <td>1-8 tickets</td>
                    <td className="deal-score-col">
                        <button className="ui blue image label deal-score">
                            Good
                        </button>
                    </td>
                    <td style={(width <= 800) ? {textAlign: "right"} : {textAlign: "center"}}>
                    <Modal
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        trigger={<button className="ui secondary button" style={(width <= 800) ? {width: "100%"} : {width: "8rem"}}>$84/ea</button>}
                    >
                        <Modal.Header>Purchase Tickets</Modal.Header>
                        <Modal.Content image>
                            <Image size='medium' src='https://i.imgur.com/xiAA7q0.png' wrapped />
                            <Modal.Description>
                                <p>How many tickets would you like to purchase?</p>
                                <Select placeholder='Select number' options={ticketOptions} />
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button onClick={() => setOpen(false)}>Cancel</Button>
                            <Button onClick={() => setOpen(false)} positive>Confirm</Button>
                        </Modal.Actions>
                    </Modal>
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
                    <Modal
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        trigger={<button className="ui secondary button" style={(width <= 800) ? {width: "100%"} : {width: "8rem"}}>$15/ea</button>}
                    >
                        <Modal.Header>Purchase Tickets</Modal.Header>
                        <Modal.Content image>
                            <Image size='medium' src='https://i.imgur.com/xiAA7q0.png' wrapped />
                            <Modal.Description>
                                <p>How many tickets would you like to purchase?</p>
                                <Select placeholder='Select number' options={ticketOptions} />
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button onClick={() => setOpen(false)}>Cancel</Button>
                            <Button onClick={() => setOpen(false)} positive>Confirm</Button>
                        </Modal.Actions>
                    </Modal>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TicketTable;
