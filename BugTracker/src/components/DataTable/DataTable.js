import React from 'react'
import {Link} from 'react-router-dom'

export default function DataTable (props) {
    return (
    <>
        <table className='table table-lg table-borderless'>
            <thead>
                <tr className='table-light'>
                    {
                        props.tableHeadings ? props.tableHeadings.map((heading)=>{
                            return <th style={{color:'gray'}}>{heading}</th>
                        }) : ''
                    }
                </tr>
            </thead>
            <tbody>
                <tr>
                    {
                        props.prj ? <Link  to="/bugtracker"><td style={{color:'navy'}}>Bug Tracker</td></Link> :
                        <td style={{color:'navy'}}>Bug Tracker</td>
                    }
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
