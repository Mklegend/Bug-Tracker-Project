import React, { Component } from 'react'
import DataSection from '../DataSection/DataSection'
import TicketInfo from '../TicketInfo/TicketInfo'

export default class Project extends Component {

    constructor(props){
        super(props)
        this.state = {
            showTicketInfo : false
        }
    }
    render(){
    return (
    <div className='container-fluid'>
        <div className='container-fluid px-0 mt-5'>
            <h2 className='fw-bold' style={{color:'navy'}}>PROJECT</h2>
        </div>
        <div className='row mt-5'>
            <div className='col-3'>
                <h3 className='fw-bold' style={{color:'navy'}}>{this.props.title}</h3>
            </div>
            <div className='col-9 d-flex justify-content-center'>
                <h4 className='fw-bold' style={{color:'navy'}}>{this.props.desc}</h4>
            </div>
        </div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 col-md-4'>
                    <DataSection title={'Team'} item={'Member'} tableHeadings={['Name','Email','Phone']} />
                </div>
                <div className='col-12 col-md-8'>
                    <DataSection title={'Tickets'} tableHeadings={['Ticket Title','Description','Ticket Author']} item={'Ticket'} />
                </div>
            </div>
        </div>
        <div className='container-fluid'>
            {
                this.state.showTicketInfo ? <TicketInfo /> : <></>
            } 
        </div>
    </div>
  )
}
}