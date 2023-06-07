import React from 'react'
import { Badge } from 'react-bootstrap'

const BadgesComp = ({ data }) => {
    
    return (
        <div>{data.map((title) => {return <Badge key={title} bg="dark" style={{margin:2}}>{title}</Badge> })}</div>
    )
}

export default BadgesComp