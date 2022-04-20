import React, { Component } from 'react'

export default function DataTable (props) {
    return (
    <>
        <table className='table table-lg table-borderless table-hover'>
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
