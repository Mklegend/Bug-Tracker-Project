import React, { useState,useEffect } from 'react'
import { Modal, Button, InputGroup } from 'react-bootstrap'
import axios from "axios";
export const ProjectModal = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("")
  const [team, setTeam] = useState("none")
  const [fullteam, setFullteam] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      loadData();
  }, [])
  async function loadData() {
    let x = await axios.get('http://localhost:5000/organization/getfreeemployee');
    if (x){
      setFullteam(x.data);
      setLoaded(true);
    }
  }

  // const addNewProject = () => setShow(false);
  async function addNewProject() {
    if (name && description) {
      await axios.post("http://localhost:5000/project/newproject", { name: name, description: description, lead: team });
      setShow(false);
    }
  }
  const handleShow = () => setShow(true);

  return (
    <>

      <Button style={{ backgroundColor: '#6D6EDC' }} onClick={handleShow}>
        New Project
      </Button>


      <Modal show={show} onHide={addNewProject}>
        <Modal.Header className='border-0 m-2' closeButton onClick={()=>{setShow(false)}}>
          <Modal.Title>Add New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container'>
            <label className='h3 text-muted'>Project Name</label>
            <input type={'text'} className='form-control rounded-3 py-3' placeholder='Enter Project Name' onChange={(event) => { setName(event.target.value) }} value={name} />
          </div>
          <div className='container my-3 d-flex flex-column'>
            <label className='h3 text-muted'>Project Description</label>
            <textarea className='form-control' style={{ borderRadius: '5px', height: '100px' }} placeholder='Enter Description' onChange={(event) => { setDescription(event.target.value) }} value={description} />
          </div>
          <div className='container'>
            <label className='h3 text-muted'>Add Team Members</label>
            <select className="form-select" multiple aria-label="multiple select example">
              {
                loaded ? (fullteam.map((element) => {return <option value={element.name} onClick={() => {setTeam(element.name)}} >{element.name}</option>})) : (<h1>No available Employees</h1>)
              }

            </select>
          </div>
        </Modal.Body>
        <Modal.Footer className='justify-content-start border-0 m-2'>
          <Button style={{ backgroundColor: '#6D6EDC' }} className='btn btn-lg py-2 px-3' onClick={addNewProject}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
