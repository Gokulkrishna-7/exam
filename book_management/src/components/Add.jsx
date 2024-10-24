import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Add() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Book
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add A New Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control type="text" className='mt-2' placeholder="Book Name" />
                    <Form.Control type="text" className='mt-2' placeholder="Book description" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" >Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add
