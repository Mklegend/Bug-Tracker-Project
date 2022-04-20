import React from 'react'
import DataSection from '../DataSection/DataSection'
import TicketStatsSection from '../TicketStatsSection/TicketStatsSection'

export default function Project(props) {
  return (
    <div className='container-fluid'>
        <div className='container-fluid mt-5'>
            <h2 className='fw-bold' style={{color:'navy'}}>PROJECT</h2>
        </div>
        <div className='row mt-5'>
            <div className='col-3'>
                <h3 className='fw-bold' style={{color:'navy'}}>{props.title}</h3>
            </div>
            <div className='col-9 d-flex justify-content-center'>
                <h4 className='fw-bold' style={{color:'navy'}}>{props.desc}</h4>
            </div>
        </div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-6'>
                    <DataSection title={'Team'} item={'Member'} tableHeadings={['Name','Email','Phone']} />
                </div>
                <div className='col-6'>
                    <DataSection title={'Projects'} tableHeadings={['Project','Description','Contributors']} item={'Project'} />
                </div>
            </div>
        </div>
    </div>
  )
}
