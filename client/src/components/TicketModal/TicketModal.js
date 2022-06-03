import React,{useState, useEffect} from 'react'
import {Modal,Button, InputGroup} from 'react-bootstrap'
import axios from 'axios'

export const TicketModal = () => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [lead, setLead] = useState("none")
    const [fullteam, setFullteam] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [time, setTime] = useState();
    const [type, setType] = useState("Issue");
    const [priority, setPriority] = useState("low");
    const [status, setStatus] = useState("new");  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    async function submit() {
        
    } 
  
    return (
      <>
        
        <Button style={{backgroundColor:'#6D6EDC'}} onClick={handleShow}>
            New Ticket
        </Button>
        
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className='border-0 m-2' closeButton>
            <Modal.Title>Create Ticket</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='container'>
                <label className='h3 text-muted'>Title</label>
                <input type={'text'} className='form-control rounded-3 py-3' placeholder='Enter Ticket Title' />
            </div>
            <div className='container my-4 d-flex flex-column'>
                <label className='h3 text-muted'>Ticket Description</label>
                <textarea className='form-control' style={{borderRadius:'5px',height:'100px'}} placeholder='Enter Description' />
            </div>
            <div className='container d-flex mt-4'>
                <div className='container'>
                    <label className='h3 text-muted'>Assigned Devs</label>
                    <select className="form-select" multiple aria-label="multiple select example">
                        <option selected>Select Members</option>
                        <option value="1">Jhon Doe</option>
                        <option value="2">Marry Herd</option>
                        <option value="3">Tiara George</option>
                    </select>
                </div>
                <div className='container'>
                    <label className='h3 text-muted'>Time Estimate(Hours)</label>
                    <input type={'number'} className='form-control rounded-3 py-3' placeholder='Enter Estimated Time' />
                 </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col'>
                        <label className='h5 text-muted'>Type</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Issue</option>
                            <option value="1">Bug</option>
                            <option value="2">Feature Request</option>
                        </select>
                    </div>
                    <div className='col'>
                        <label className='h5 text-muted'>Priority</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>low</option>
                            <option value="1">medium</option>
                            <option value="2">high</option>
                        </select>
                    </div>
                    <div className='col'>
                        <label className='h5 text-muted'>Status</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>new</option>
                            <option value="1">resolved</option>
                            <option value="2">In progress</option>
                        </select>
                    </div>
                </div>        
            </div>
          </Modal.Body>
          <Modal.Footer className='justify-content-start border-0 m-2'>
            <Button style={{backgroundColor:'#6D6EDC'}} className='btn btn-lg py-2 px-3' onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
