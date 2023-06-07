import React, { useState } from 'react'
import { Badge, Button, Col, Image, Row } from 'react-bootstrap'
import { IoStarSharp } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom'
import BadgesComp from './BadgesComp'
import ModalPrevEp from './ModalPrevEp'
import ModalBooking from './ModalBooking'

const Summary = () => {

    const { state } = useLocation()
    const navigate = useNavigate()
    console.log(state)

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false)
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [prev, setPrev] = useState({})

    const prevEp = async () => {
        console.log(state.prev)
        await fetch(`${state.prev}`).then(res => res.json()).then(data => {
            setPrev(data)
            console.log(data)
            handleShow()
        })
    }

    const user = JSON.parse(localStorage.getItem("user-quadb"))

    const handleBooking = () =>{
        if(!user) {
            alert("User not logged in. Please Logged in prior to booking")
            navigate("/")
        }
        handleShow1()
    }
    
    return (
        <div style={{ margin: 10, padding: 20 }}>
            <ModalPrevEp show={show} handleClose={handleClose} data={prev} />
            <ModalBooking show={show1} handleClose={handleClose1} data={{show: state.name,owner:user?.name,genre:state.genres}} />
            <Row >
                <Col style={{ display: "flex", justifyContent: "center" }}>
                    <img style={{ width: 400, height: 600 }} src={state.image} alt="" />
                </Col>
                <Col style={{ padding: 20 }}>
                    <Row style={{margin:10}}>
                        <Col>
                            <p> <Badge style={{ marginRight: 10 }}>Show</Badge>{"  "}<span style={{ fontSize: 18, fontWeight: 600, textDecorationLine: "underline" }}>{state.name}</span> </p>
                        </Col>
                    </Row>
                    <Row style={{margin:10}}>
                        <Col>
                            <IoStarSharp style={{ width: 20, height: 20, margin: 10 }} /> <b style={{ margin: 10 }}>{state.rating == null ? "Yet to be reviewed" : state.rating}</b>
                        </Col>
                    </Row>
                    <Row style={{margin:10}}>
                        <Col>
                            <span style={{ textDecorationLine: "underline", fontSize: 16, fontWeight: 600 }}>Genres</span><BadgesComp data={state.genres} />
                        </Col>
                    </Row>
                    <Row style={{margin:10}}>
                        <Col>
                            <p> <span style={{ textDecorationLine: "underline", fontSize: 16, fontWeight: 600 }}>Summary</span>{"  "}<div style={{padding:5}} dangerouslySetInnerHTML={{ __html: state.summary }} /> </p>
                        </Col>
                    </Row>
                    <Row style={{margin:10}} >
                        <Col>
                        <p onClick={() => { prevEp() }} style={{ color: "blue", textDecorationLine: "underline", cursor: "pointer" }}>Previous Episode</p>
                        </Col>
                    </Row>
                    <Row style={{margin:10}} >
                        <Col>
                            <Button onClick={()=>{handleBooking()}}>Book a Ticket Now !</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>


            <Row style={{ margin: 10 }}>
            </Row>
        </div>
    )
}

export default Summary