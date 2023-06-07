import React, { useEffect } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'

const ModalPrevEp = ({ show, handleClose, data }) => {
  console.log(data)
  return (
    <>
      {data && <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>More Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>

          <img src={data.image?.medium} alt="" />
          </Row>
          <Row style={{margin:10}}>
            <Col>
              <b>Total Season: </b> {data.season}
            </Col>
            <Col>
              <b>Air Time: </b> {data.airtime}
            </Col>
          </Row>
          <Row style={{margin:10}}>
            <Col>
              <b>Prev Ep.: </b> {data.number}
            </Col>
            <Col>
              <b>Name: </b> {data.name}
            </Col>
          </Row>
          <Row style={{margin:10}}>
            <b>Summary: </b> <div dangerouslySetInnerHTML={{ __html: data.summary }} />
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>}
    </>
  )
}

export default ModalPrevEp