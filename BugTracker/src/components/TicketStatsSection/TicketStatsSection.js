import React from 'react'
import TicketsStats from '../TicketsStats/TicketsStats'


export default function TicketStatsSection() {
  return (
    <div className='mt-5 row d-flex'>
        <div className='col container border border-2 rounded-2'>
            <TicketsStats stat={'Type'} options={['Issue','Bug','Feature Request']} />
        </div>
        <div className='col container border border-2 mx-xl-3 rounded-2'>
            <TicketsStats stat={'Priority'} options={['Immediate','High','Low','Medium']} />
        </div>
        <div className='col container border border-2 rounded-2'>
            <TicketsStats stat={'Status'} options={['Resolved','New','In Progress']}/>
        </div>
    </div>
  )
}
