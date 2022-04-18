import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './login.css'
import { EnvelopeFill } from 'react-bootstrap-icons'
import { LockFill } from 'react-bootstrap-icons'



export const LogIn = () => {
    return (
        <div className='py-5 container-fluid d-flex flex-column align-items-center' style={{ minHeight: '100vh', backgroundColor: '#212C4B' }}>

            <div classname='d-flex row'>
                <div className='text-center'>
                    <h1> <span style={{ color: 'white' }}>Bug Tracker</span></h1>
                </div>

                <div className="text-center">
                    <h3 className='text-muted' style={{ fontSize: '20px', color: 'white' }}> Login or Register</h3>
                </div>
            </div>

            <div />

            <div className='row my-3 py-5 px-5' style={{ backgroundColor: '#ffff ', borderRadius: '1.5%' }}>
                <div className='col text-center'>
                    <div className='text-center'>
                        <h4 className='text-muted'>Sign In</h4>
                    </div>
                    <div className='mb-5'>
                        <hr></hr>
                    </div>
                    <Form>
                        <Form.Group style={{ borderRadius: 5, borderWidth: '1px' }} className="mb-3 ps-2 align-items-center border border-2 d-flex" controlId="formBasicPassword">
                            <EnvelopeFill className='me-1' size={20} color={'lightgray'} />
                            <input type="email" className='py-2' placeholder="Email" style={{ border: 'none', outline: 'none' }} />
                        </Form.Group>
                        <Form.Group style={{ borderRadius: 5, borderWidth: '1px' }} className="mb-3 ps-2 align-items-center border border-2 d-flex" controlId="formBasicPassword">
                            <LockFill className='me-1' size={20} color={'lightgray'} />
                            <input className='py-2' type='password' placeholder='Password' style={{ border: 'none', outline: 'none' }} />
                        </Form.Group>
                        <Form.Group className='d-flex'>
                            <div>
                                <input className='me-3' type='checkbox' />
                            </div>

                            <div>
                                <p className='text-muted'>Remember me</p>
                            </div>
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{ backgroundColor: '#577FE6' }}>
                            Sign In
                        </Button>
                    </Form>
                </div>
            </div>



            <div className='d-flex row w-25 text-center'>
                <div className='col'>
                    <div>
                        <a className='nav-link' href="#/" >Forgot Password </a>
                    </div>
                    
                </div>
                <div className='col'>
                <div>
                        <a className='nav-link' href="#/">Create an Account</a>
                    </div>
                </div>
            </div>




            <div className='row mt-3'>
                <div className='text-center'>
                    <p><span style={{ color: 'grey' }}>© 2022 </span><span style={{ color: '#577FE6' }} >Moazzam Qureshi</span></p>
                </div>

            </div>
        </div >
        
    )
}
