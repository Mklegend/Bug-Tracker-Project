import React from 'react'
import SideBar from '../Sidebar/SideBar'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from "axios";

export default class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show1: false,
            show2: false,
            data: [],
        }
        this.ref1 = React.createRef()
        this.ref2 = React.createRef()
    }

    handleClose1 = () => {
        this.setState({
            show1: false
        })
    };
    handleShow1 = () => {
        this.setState({
            show1: true
        })
    };

    handleClose2 = () => {
        this.setState({
            show2: false
        })
    };
    handleShow2 = (id,name,designation) => {
        // let uname = this.ref1.current
        // let des = this.ref2.current
        // console.log(this.ref1)
        // console.log(this.ref2)
        // uname.placeholder="name"
        // des.placeholder="designation"
        this.setState({
            show2: true
        })
    };

    componentDidMount() {
        axios.get('http://localhost:8000/organization/getemployee').then((result) => {
            // console.log(result.data)
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
                    <Modal show={this.state.show1} onHide={this.handleClose1}>
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
                            <Button variant="secondary" onClick={this.handleClose1}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    {/* //Modal 2 */}
                    <Modal show={this.state.show2} onHide={this.handleClose2}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add user details below</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form action='http://localhost:8000/organization/updateemployee' method='post'>
                                <Form.Group className="mb-3" controlId="formBasicUsername">
                                    <Form.Label>Old Username</Form.Label>
                                    <Form.Control type="text" placeholder="Designation" name='oldName'/>
                                    <Form.Label>New Username</Form.Label>
                                    <Form.Control type="text" placeholder="Username" name='newName' ref={this.ref1} />
                                    <Form.Label>New Designation</Form.Label>
                                    <Form.Control type="text" placeholder="Designation" name='newDesignation' ref={this.ref2} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox" id='checkbox'>
                                    <Form.Check type="checkbox" name='assigned' label="Assigned" value="yes" />
                                </Form.Group>
                                <Button variant="primary" type='submit'>
                                    Save Changes
                                </Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose2}>
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
                                                    {/* <form action='http://localhost:8000/organization/getemployee' method='get'>
                                                        <input type="hidden" name='id' value={item._id} /> */}
                                                        <div className='container'>
                                                            <Button variant="primary" type='submit' onClick={()=>{this.handleShow2(item._id,item.name,item.designation)}}>Edit user</Button>{' '}
                                                        </div>
                                                    {/* </form> */}
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
                                    <Button variant="primary" onClick={this.handleShow1}>Add user</Button>{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}