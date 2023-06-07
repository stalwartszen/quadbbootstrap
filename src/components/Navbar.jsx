import { useState } from 'react';
import { Button, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ModalLogin from './ModalLogin';

const NavbarComp = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate()
    const user = localStorage.getItem("user-quadb")
    return (
        <>
            <ModalLogin show={show} handleClose={handleClose} data={""} />
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{padding:".5rem",height:"10%"}}>

                <Navbar.Brand href="#" as={Link} to="/" style={{fontSize:"1.2rem",marginLeft:"2%"}}>ShowQuad</Navbar.Brand>
                {!user && <Button className='ms-auto me-3' onClick={()=>{handleShow()}} >Login</Button>}
                {user && <Button className='ms-auto me-3' onClick={()=>{localStorage.removeItem("user-quadb"); navigate("/")}} >Logout</Button>}

            </Navbar>
        </>
    )
}

export default NavbarComp