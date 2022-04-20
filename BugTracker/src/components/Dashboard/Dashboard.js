import React from 'react'
import DataSection from '../DataSection/DataSection'
import TicketStatsSection from '../TicketStatsSection/TicketStatsSection'

export default function Dashboard() {
  return (
    <div className='container-fluid'>
        <div className='container-fluid mt-5'>
            <h2 className='fw-bold' style={{color:'navy'}}>Dashboard</h2>
        </div>
        <DataSection title={'Projects'} item={'Project'} tableHeadings={['Project','Description','Contributors']} />
        <TicketStatsSection />
    </div>
  )
}
