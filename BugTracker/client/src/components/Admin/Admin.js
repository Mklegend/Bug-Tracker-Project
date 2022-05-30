import React from 'react'
import SideBar from '../Sidebar/SideBar' 

export default function Admin() {
  return (
    <>
    <SideBar/>
    <div className='container-fluid'>
        <div className='container-fluid px-0 mt-5 mb-5'>
                <h2 className='fw-bold' style={{color:'navy'}}>ADMINISTRATION</h2>
        </div>
        <div className='container-fluid mt-5'>
            <div className='row d-flex'>
                <div className='col-12 col-md-5 mx-md-5' style={{boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)'}}>
                    <div className='my-3 container border-bottom border-bottom-2'>
                        <h4>ORGANIZATION</h4>
                    </div>
                    <div className='container py-4'>
                        <ul className="list-group">
                            <li className="list-group-item">Jhon Doe</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">Porta ac consectetur ac</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                </div>
                <div className='col-12 col-md-5' style={{boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)'}}>
                    <div className='my-3 container border-bottom border-bottom-2'>
                        <h4>Edit User Information</h4>
                    </div>
                    <div className='container'>
                        <h5>No Devs Selected</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
