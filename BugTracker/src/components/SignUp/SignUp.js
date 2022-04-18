import React from 'react'
import { Form, Button } from 'react-bootstrap'
// import './SignUp.css'
import { EnvelopeFill } from 'react-bootstrap-icons'
import { Phone } from 'react-bootstrap-icons'
import { PersonFill } from 'react-bootstrap-icons'
import { LockFill } from 'react-bootstrap-icons'



export const SignUp = () => {
    return (
        
            <div id='ctn' className='py-5 container-fluid d-flex flex-column align-items-center' style={{ minHeight: '100vh', backgroundColor: '#212C4B' }}>


                <div classname='d-flex row'>
                    <div className='text-center'>
                        <h1> <span style={{ color: 'white' }}>Bug Tracker</span></h1>
                    </div>

                    <div className="text-center">
                        <h3 className='text-muted' style={{ fontSize: '20px', color: 'white' }}> Login or Register</h3>
                    </div>
                </div>

                <div />




                <div className='row my-5 py-5 px-3' style={{ backgroundColor: '#ffff ', borderRadius: '1.5%' }}>
                    <div className='col text-center'>
                        <div className='text-center'>
                            <h4 className='text-muted'>Sign Up</h4>
                        </div>
                        <div className='mb-5'>
                            <hr></hr>
                        </div>
                        <Form>
                            <Form.Group className='d-flex text-center' controlId="formBasicEmail" style={{ backgroundColor: 'white' }}>

                                <div className="mb-3 me-1 ps-2 align-items-center border border-2 d-flex">
                                    <PersonFill className='me-1' size={20} color={'lightgray'} />
                                    <input className='py-2' type="email" placeholder="First Name" style={{ border: 'none', outline: 'none' }} />
                                </div>
                                <div className="mb-3 ps-2 align-items-center border border-2 d-flex">
                                    <PersonFill className='me-1' size={20} color={'lightgray'} />
                                    <input className='py-2' type="email" placeholder="Last Name" style={{ border: 'none', outline: 'none' }} />
                                </div>

                            </Form.Group>
                            <Form.Group style={{ borderRadius: 5, borderWidth: '1px' }} className="mb-3 ps-2 align-items-center border border-2 d-flex" controlId="formBasicPassword">
                                <Phone className='me-1' size={20} color={'lightgray'} />
                                <input className='py-2 w-100' type='tel' placeholder='Phone Number' style={{ border: 'none', outline: 'none' }} />
                            </Form.Group>
                            <Form.Group style={{ borderRadius: 5, borderWidth: '1px' }} className="mb-3 ps-2 align-items-center border border-2 d-flex" controlId="formBasicPassword">
                                <EnvelopeFill className='me-1' size={20} color={'lightgray'} />
                                <input type="email" className='py-2 w-100' placeholder="Email" style={{ border: 'none', outline: 'none' }} />
                            </Form.Group>
                            <Form.Group style={{ borderRadius: 5, borderWidth: '1px' }} className="mb-3 ps-2 align-items-center border border-2 d-flex" controlId="formBasicPassword">
                                <LockFill className='me-1' size={20} color={'lightgray'} />
                                <input className='py-2 w-100' type='password' placeholder='Password' style={{ border: 'none', outline: 'none' }} />
                            </Form.Group>
                            <Form.Group style={{ borderRadius: 5, borderWidth: '1px' }} className="mb-3 ps-2 align-items-center border border-2 d-flex" controlId="formBasicPassword">
                                <LockFill className='me-1' size={20} color={'lightgray'} />
                                <input className='py-2 w-100' type='password' placeholder='Confirm Password' style={{ border: 'none', outline: 'none' }} />
                            </Form.Group>
                            <Button variant="primary" type="submit" style={{ backgroundColor: '#577FE6' }}>
                                Create Account
                            </Button>
                        </Form>
                    </div>
                </div>






                <div className='row mt-3'>
                    <div className='text-center'>
                        <p><span style={{ color: 'grey' }}>© 2022 </span><span style={{ color: '#577FE6' }} >Moazzam Qureshi</span></p>
                    </div>

                </div>
        </div>
        

    );
}
