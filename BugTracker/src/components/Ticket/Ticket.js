import React from 'react'

export default function Ticket(props) {
  return (
    <div className='container-fluid border border-2 pb-4' style={{boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)'}}>
        <table className='table table-borderless'>
            <thead className='text-secondary'>
                <tr>
                    <th className='col-2'>TicketTitle</th>
                    <th className='col-2'>Author</th>
                    <th className='col-4'>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr className='text-muted'>
                    <td className='h4'>Create Schema</td>
                    <td className='h5'>Jhon Doe</td>
                    <td className='h5'>Determine which tables to create for database related issues !</td>
                </tr>
            </tbody>
        </table>
        <table className='table table-borderless mt-4'>
            <thead className='text-muted'>
                <tr>
                    <th className='col-2'>Status</th>
                    <th className='col-2'>Priority</th>
                    <th className='col-2'>Type</th>
                    <th className='col-2'>Time Estimate(Hours)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span style={{color:'navy'}} className='badge alert-secondary'>RESOLVED</span></td>
                    <td><span style={{color:'navy'}} className='badge alert-secondary'>INTERMEDIATE</span></td>
                    <td><span style={{color:'navy'}} className='badge alert-secondary'>ISSUE</span></td>
                    <td><span style={{color:'navy'}} className='badge alert-secondary'>8</span></td>
                </tr>
            </tbody>
        </table>
        <hr />
        <table className='table table-borderless'>
            <thead className='text-secondary'>
                <tr>
                    <th>Assigned Devs</th>
                </tr>
            </thead>
            <tbody className='text-secondary'>
                <tr>
                    <td className='h5 fw-bold'>Jhon Doe</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
