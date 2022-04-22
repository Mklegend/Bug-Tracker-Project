import React from 'react'
import {Tv} from 'react-bootstrap-icons'
import {TicketDetailed} from 'react-bootstrap-icons'
import {Journals} from 'react-bootstrap-icons'
import {Bug} from 'react-bootstrap-icons'
import {Navbar,Nav,Container, Button} from 'react-bootstrap'
import {Link} from "react-router-dom";



export default function SideBar() {
  return (
    
    <Navbar expand="md" className='align-items-start pe-lg-4 me-lg-3 border-end border-end-2'>
        <Container className='d-flex flex-md-column align-items-start'>
            <Navbar.Brand className='my-4 d-flex align-items-center' href="/">
                <Bug size={50} color='navy'/>
                <h5 style={{color:'navy'}}>Bug Tracker</h5>
            </Navbar.Brand>
            <Navbar.Toggle className='mt-5' style={{textAlign:'right'}} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto d-flex flex-column">
                    <Nav.Link className='d-flex align-items-center' href="#home">
                        <Tv size={20}/>
                        <Link className='nav-link'  to="/"><h5 className='ms-2'>Dashboard</h5></Link>
                    </Nav.Link>
                    <Nav.Link className='d-flex align-items-center' href="#home">
                        <TicketDetailed size={20}/>
                        <Link className='nav-link' to="/tickets"><h5 className='ms-2'>Tickets</h5></Link>
                    </Nav.Link>
                    <Nav.Link className='d-flex align-items-center' href="#home">
                        <Journals size={20}/>
                        <Link className='nav-link'  to="/admin"><h5 className='ms-2'>Administration</h5></Link>
                    </Nav.Link>
                    <Container className='text-center mt-3'>
                        <Link  to="/"><Button variant='danger' size={'lg'}>Logout</Button></Link>
                    </Container>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    
  )
}
