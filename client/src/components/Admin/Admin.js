import React from 'react'
import SideBar from '../Sidebar/SideBar'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react';
import axios from "axios";

export default class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            data: []
        }
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    };
    handleShow = () => {
        this.setState({
            show: true
        })
    };

    componentDidMount() {
        axios.get('http://localhost:8000/organization/getemployee').then((result) => {
            console.log(result.data)
            this.setState({
                data: result.data
            })
        })
    }

    render() {
        return (
            <>
                <SideBar />
                <div className='container-fluid'>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add user details below</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form action='http://localhost:8000/organization/createemployee' method='post'>
                                <Form.Group className="mb-3" controlId="formBasicUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Username" name='name' />
                                    <Form.Label>Designation</Form.Label>
                                    <Form.Control type="text" placeholder="Designation" name='designation' />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" name='assigned' label="Assigned" value="yes" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Save Changes
                                </Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <div className='container-fluid px-0 mt-5 mb-5'>
                        <h2 className='fw-bold' style={{ color: 'navy' }}>ADMINISTRATION</h2>
                    </div>
                    <div className='container-fluid mt-5'>
                        <div className='row d-flex'>
                            <div className='col-12 col-md-5 mx-md-5' style={{ boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)' }}>
                                <div className='my-3 container border-bottom border-bottom-2'>
                                    <h4>ORGANIZATION</h4>
                                </div>
                                <div className='container py-4'>

                                    <ul className="list-group">
                                        {
                                            this.state.data.map(item => (
                                                <div>
                                                    <li key={item._id}>
                                                        {item.name}
                                                    </li>
                                                    <form action='http://localhost:8000/organization/deleteemployee' method='post'>
                                                        <input type="hidden" name='id' value={item._id} />
                                                        <button type='submit'>Delete</button>
                                                    </form>
                                                </div>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className='col-12 col-md-5' style={{ boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)' }}>
                                <div className='my-3 container border-bottom border-bottom-2'>
                                    <h4>Edit User Information</h4>
                                </div>
                                <div className='container'>
                                    <Button variant="primary" onClick={this.handleShow}>Add user</Button>{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}