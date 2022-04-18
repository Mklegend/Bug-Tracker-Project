import React from 'react'
import ProjectSection from '../ProjectSection/ProjectSection'
import TicketsStats from '../TicketsStats/TicketsStats'
import TicketStats from '../TicketsStats/TicketsStats'
import TicketStatsSection from '../TicketStatsSection/TicketStatsSection'

export default function Dashboard() {
  return (
    <div className='container-fluid'>
        <div className='container mt-5'>
            <h2>Dashboard</h2>
        </div>
        <ProjectSection />
        <TicketStatsSection />
    </div>
  )
}
