import React, { useState } from 'react'
// import './TodoList.css'
import { AiFillCheckCircle } from "react-icons/ai";
import {
    Container, ListGroup, Row,
    Col, Button, Modal, Alert
} from 'react-bootstrap'



function ToList(props) {

    const [show, setShow] = useState(false)
    const [successDelete, setSuccessDelete] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [customer, setCustomer] = useState({});

    const renderCustomer = () => {
        return props.user.map((item) => {
            return (
                <ListGroup.Item key={item.id}>
                <Row>
                    <Col xs={2} md={2}>
                        {item.name}
                    </Col>
                    <Col xs={2} md={2}>
                        {item.age}
                    </Col>
                    <Col xs={2} md={2}>
                        {item.document}
                    </Col>
                    <Col xs={2} md={2}>
                        {item.tel}
                    </Col>
                    <Col xs={2} md={2}>
                        {item.state}
                    </Col>
                    <Col xs={2} md={2}>
                        <Button variant="success">
                            Alterar
                        </Button>
                        <Button className="mx-1" variant="danger"
                            onClick={() => {
                                setCustomer(item)
                                handleShow()
                                }}>
                            Deletar
                        </Button>
                    </Col>
                </Row>
            </ListGroup.Item>
            )
        })
        
    }

    return (
        <Container>
            {
                successDelete 
                ?
                <Alert key='success' variant='success'>
                    Item apagado com sucesso! <AiFillCheckCircle size="25" />
                </Alert>
                :
                ''
            }
            
            <Row>
                <Col>
                <ListGroup variant="flush">
                    {renderCustomer()}
                </ListGroup>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Deletar cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>Tem certeza que deseja deletar o(a) cliente <strong>{customer.name}</strong> </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="danger" onClick={() => {
                        props.delete(customer.id)
                        handleClose()
                        setSuccessDelete(true)
                        setTimeout(() => {setSuccessDelete(false)}, 2000)
                        }} >
                        Deletar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )

}

export default ToList