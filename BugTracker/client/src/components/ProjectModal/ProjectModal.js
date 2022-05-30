import React,{useState} from 'react'
import {Modal,Button, InputGroup} from 'react-bootstrap'

export const ProjectModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        
        <Button style={{backgroundColor:'#6D6EDC'}} onClick={handleShow}>
            New Project
        </Button>
        
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className='border-0 m-2' closeButton>
            <Modal.Title>Add New Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='container'>
                <label className='h3 text-muted'>Project Name</label>
                <input type={'text'} className='form-control rounded-3 py-3' placeholder='Enter Project Name' />
            </div>
            <div className='container my-3 d-flex flex-column'>
                <label className='h3 text-muted'>Project Description</label>
                <textarea className='form-control' style={{borderRadius:'5px',height:'100px'}} placeholder='Enter Description' />
            </div>
            <div className='container'>
                <label className='h3 text-muted'>Select Team Lead</label>
                <select className="form-select" multiple aria-label="multiple select example">
                    <option selected>Select Members</option>
                    <option value="1">Jhon Doe</option>
                    <option value="2">Marry Herd</option>
                    <option value="3">Tiara George</option>
                </select>
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
