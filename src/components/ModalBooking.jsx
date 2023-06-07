import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import BadgesComp from './BadgesComp'

const ModalBooking = ({ show, handleClose, data }) => {
    const [form, setform] = useState({
        showname: data.show,
        ticketowner: data.owner,
        noofbookings: 0
    })
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Book Ticket Now !</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group style={{ margin: 10 }}>
                            <Form.Label>Show-Name</Form.Label>
                            <Form.Control disabled type="text" placeholder="Enter Your Name" value={form.showname} onChange={(e) => { setform({ ...form, showname: e.target.value }) }} />
                        </Form.Group>

                        <span style={{ margin: 10, textDecorationLine: "underline", fontSize: 16, fontWeight: 600 }}>Genres</span><BadgesComp style={{ margin: 10 }} data={data.genre} />

                        <Form.Group style={{ margin: 10 }}>
                            <Form.Label>Ticket-Booker</Form.Label>
                            <Form.Control disabled type="text" placeholder="Enter Your Name" value={form.ticketowner} onChange={(e) => { setform({ ...form, ticketowner: e.target.value }) }} />
                        </Form.Group>

                        <Form.Group style={{ margin: 10 }}>
                            <Form.Label>No. of People</Form.Label>
                            <Form.Control type="number" placeholder="Enter No. of people attending" value={form.noofbookings} onChange={(e) => { setform({ ...form, noofbookings: e.target.value }) }} />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" disabled={form.noofbookings < 1} onClick={() => {
                        localStorage.setItem("booking-quadb", JSON.stringify(form));
                        handleClose();
                        alert(`Thanks for the Interest Your Booking as been successfully done for the show "${form.showname}", by "@${form.ticketowner}" for validating "${form.noofbookings}" bookings.`)
                    }}>Book</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalBooking