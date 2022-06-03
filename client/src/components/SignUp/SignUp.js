import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './SignUp.css'
import { EnvelopeFill } from 'react-bootstrap-icons'
import { Phone } from 'react-bootstrap-icons'
import { PersonFill } from 'react-bootstrap-icons'
import { LockFill } from 'react-bootstrap-icons'
import { Facebook } from 'react-bootstrap-icons'
import { Google } from 'react-bootstrap-icons'

export const SignUp = () => {
    return (
        <div className='container-fluid'>
            <div className="custom-shape-divider-top-1650649808">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill">
                    </path>
                </svg>

            </div>
            <div className='py-5 container-fluid d-flex flex-column align-items-center example' style={{ minHeight: '100vh'}}>
                <div className='d-flex row'>
                    <div className='text-center'>
                        <h1> <span style={{ color: 'white' }}>Bug Tracker</span></h1>
                    </div>

                    <div className="text-center">
                        <h3 style={{ fontSize: '20px', color: 'rgb(220,220,220)' }}> Login or Register</h3>
                    </div>
                </div>

                <div />




                <div className='row my-5 py-5 px-3 ' style={{ backgroundColor: '#ffff ', borderRadius: '1.5%', boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)' }}>
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
                            <Button className='mb-4' variant="primary" type="submit" style={{ backgroundColor: '#577FE6' }}>
                                Create Account
                            </Button>

                            <Form.Group className='d-flex'>
                                <div className="login_wrapper">
                                    <div className=' mb-2 me-1 align-items-center'>
                                        <a href="/#" className="btn btn-primary facebook text-center"> <span>Sign Up with Facebook</span> <Facebook size={20} className='ms-2' /> </a>
                                    </div>
                                    <div className='align-items-center'>
                                        <a href="http://localhost:5000/auth/google" className="btn btn-primary google-plus text-center"> Sign Up with Gmail <Google size={20} className='ms-4' />  </a>
                                    </div>
                                </div>
                            </Form.Group>
                        </Form>
                    </div>
                </div>






                <div className='row mt-3'>
                    <div className='text-center'>
                        <p><span style={{ color: 'grey' }}>© 2022 </span><span style={{ color: '#577FE6' }} >Moazzam Qureshi</span></p>
                    </div>

                </div>
            </div>

        </div>


    );
}