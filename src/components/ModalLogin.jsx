import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const ModalLogin = ({show,handleClose,data}) => {
    const [user,setuser] = useState({
        email:"dummy@gmail.com",
        password:"dummy123",
        name:"dummy"
    })
  return (
    <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login/Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" value={user.name} onChange={(e)=>{setuser({...user,name:e.target.value})}} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Email" value={user.email} onChange={(e)=>{setuser({...user,email:e.target.value})}} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Your Password" value={user.password} onChange={(e)=>{setuser({...user,password:e.target.value})}} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={()=>{localStorage.setItem("user-quadb",JSON.stringify(user)); handleClose()}}>Login</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default ModalLogin