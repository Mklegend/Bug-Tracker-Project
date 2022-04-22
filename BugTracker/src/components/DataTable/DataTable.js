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
                        props.tableEntries.map((entries)=>{
                            return <td style={{color:'gray'}}>{entries}</td>
                        })
                    }

        
        
        


                </tr>
                <tr>
                {
                        props.prj ? <Link  to="/bugtracker"><td style={{color:'navy'}}>{props.projectName}</td></Link> :
                        <td style={{color:'navy'}}>{props.projectName}</td>
                    }
                    {
                        props.tableEntries.map((entries)=>{
                            return <td style={{color:'gray'}}>{entries}</td>
                        })
                    }

                </tr>
            </tbody>
        </table>
    </>
  )
}
