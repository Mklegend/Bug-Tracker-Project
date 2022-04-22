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
                        props.prj ? <Link  to="/bugtracker"><td style={{color:'navy'}}>{props.projectName}</td></Link> :
                        <td style={{color:'navy'}}>{props.projectName}</td>
                    }
                    {
                        props.email ? <td style={{color:'navy'}}>{props.email}</td> : ''
                    }
                    {
                        props.phoneNo ? <td style={{color:'navy'}}>{props.phoneNo}</td> : ''
                    }

                    {
                        props.ticketName ? <td style={{color:'navy'}}>{props.ticketName}</td> : ''
                    }

                    {
                        props.status ? <td style={{color:'navy'}}>{props.status}</td> : ''
                    }

                    {       
                        props.daysOutstanding ? <td style={{color:'navy'}}>{props.daysOutstanding }</td> : ''
                    }

                    {       
                        props.priority ? <td style={{color:'navy'}}>{props.priority }</td> : ''
                    }

                    {       
                        props.ticketTitle ? <td style={{color:'navy'}}>{props.ticketTitle }</td> : ''
                    }
        
                    {       
                        props.ticketDescription ? <td style={{color:'navy'}}>{props.ticketDescription }</td> : ''
                    }

                    {       
                        props.ticketAuthor ? <td style={{color:'navy'}}>{props.ticketAuthor}</td> : ''
                    }
        
        
        


                </tr>
                <tr>
                    {
                        props.prj ? <Link  to="/bugtracker"><td style={{color:'navy'}}>{props.projectName}</td></Link> :
                        <td style={{color:'navy'}}>{props.projectName}</td>
                    }
                    <td style={{color:'navy'}}>{props.email}</td>
                    <td style={{color:'navy'}}>{props.phoneNo}</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}
