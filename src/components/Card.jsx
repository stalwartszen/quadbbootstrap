import { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import BadgesComp from './BadgesComp'
import { IoStarSharp } from "react-icons/io5"
import ModalPrevEp from './ModalPrevEp'
import { useNavigate } from 'react-router-dom'

const CardComp = ({data}) => {
    

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [prev, setPrev] = useState({})

    const navigate = useNavigate()

    const prevEp = async () => {
        console.log(data.show._links.previousepisode.href)
        await fetch(`${data.show._links.previousepisode.href}`).then(res => res.json()).then(data => {
            setPrev(data)
            console.log(data)
            handleShow()
        })
    }
    return (
        <div>
            <ModalPrevEp show={show} handleClose={handleClose} data={prev} />
            <Card style={{ width: '18rem', margin: 5 }}>
                <Card.Img variant="top" style={{width:"100%",height:400}} src={data.show.image.original} />
                <Card.Body>
                    <Card.Title>{data.show.name}</Card.Title>
                    <Card.Text>
                        <BadgesComp data={data.show.genres} />
                        <IoStarSharp style={{ width: 20, height: 20, margin: 10 }} /> <b style={{ margin: 10 }}>{data.show.rating.average}</b>

                        <p onClick={() => { prevEp() }} style={{ color: "blue", textDecorationLine: "underline", cursor: "pointer" }}>Previous Episode</p>
                    </Card.Text>
                    <Button variant="primary" onClick={()=>{navigate("/details",{state:{name:data.show.name,image:data.show.image.original,rating:data.show.rating.average,summary:data.show.summary,genres:data.show.genres,prev:data.show._links.previousepisode.href}})}}>View Details</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default CardComp