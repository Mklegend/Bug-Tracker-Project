import React, { Component } from 'react'
import DataSection from '../DataSection/DataSection'
import DataTable from '../DataTable/DataTable'
import SideBar from '../Sidebar/SideBar' 

export default class TicketSection extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
    return (
      <>
      <SideBar/>
      <div className='container-fluid'>
            <div className='container-fluid px-0 mt-5'>
                <h2 className='fw-bold' style={{color:'navy'}}>TICKETS</h2>
            </div>
            <div className='container-fluid mt-5 py-3' style={{boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)'}}>
                <div className='container-fluid mb-4'>
                    <h4 className='fw-bold'>Tickets</h4>
                </div>
                <DataTable tableHeadings={['Project','Ticket','Status','Days Outstanding','Priority']} projectName={'Bug Tracker'}
                 ticketName={'Ticket'} status={'status'}  daysOutstanding={'Days Outstanding'} priority={'Priority'}/>
            </div>
      </div>
      </>
    )
  }
}
