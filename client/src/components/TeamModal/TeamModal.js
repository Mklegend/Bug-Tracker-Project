import React,{useState,useEffect} from 'react'
import {Modal,Button, InputGroup} from 'react-bootstrap'
import axios from 'axios'

export const TeamModal = () => {
    const [show, setShow] = useState(false);
    const [devs,setDevs] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [selectedDevs,setSelectedDevs] = useState([])

    const addDev = (e)=>{
      // const value = e.target.value
      console.log(e)
    }

    const getData = async (req,res)=>{
      const result = axios.get('http://localhost:5000/organization/getemployee')
      setDevs(result.data);
   }

  useEffect(()=>{
      getData()
  },[])


    return (
      <>
        
        <Button style={{backgroundColor:'#6D6EDC'}} onClick={handleShow}>
            New Member
        </Button>
        
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className='border-0 m-2' closeButton>
            <Modal.Title>Add Member</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='container'>
                <label className='h3 text-muted'>Available Users</label>
                  {devs?.map((element) => {return <option value={element.name} onClick={() => {setDevs(element.name)}} >{element.name}</option>})}
            </div>
          </Modal.Body>
          <Modal.Footer className='justify-content-start border-0 m-2'>
            <Button style={{backgroundColor:'#6D6EDC'}} className='btn btn-lg py-2 px-3' onClick={handleClose}>
              Add Selected Devs to Team
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
