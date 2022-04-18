import React from 'react'

export default function ProjectTable() {
  return (
    <>
        <table className='table table-lg table-borderless table-hover'>
            <thead>
                <tr className='table-light'>
                    <th style={{color:'gray'}}>Project</th>
                    <th style={{color:'gray'}}>Description</th>
                    <th style={{color:'gray'}}>Contributors</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{color:'navy'}}>Bug Tracker</td>
                    <td style={{color:'navy'}}>Project Management Tool to track bugs,issues etc</td>
                    <td style={{color:'navy'}}>Jhon Doe</td>
                </tr>
                <tr>
                    <td style={{color:'navy'}}>Bug Tracker</td>
                    <td style={{color:'navy'}}>Project Management Tool to track bugs,issues etc</td>
                    <td style={{color:'navy'}}>Jhon Doe</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}
