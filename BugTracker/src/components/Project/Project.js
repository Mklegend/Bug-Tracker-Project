import React, { Component } from 'react'
import DataSection from '../DataSection/DataSection'
import TicketInfo from '../TicketInfo/TicketInfo'
import {Button} from 'react-bootstrap'
import {ProjectModal} from '../ProjectModal/ProjectModal'
import { TeamModal } from '../TeamModal/TeamModal'
import { TicketModal } from '../TicketModal/TicketModal'

export default class Project extends Component {

    constructor(props){
        super(props)
        this.state = {
            showTicketInfo : true
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
            <div className='container d-flex'>
                <div className='col-12 me-md-3 col-md-4 d-none d-sm-block container-fluid py-3 mt-5 border border-2 rounded-3' style={{boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)'}}>
                    <div className='row m-2 d-flex justify-content-between'>
                        <div className='col-6 d-flex'>
                            <h3>Team</h3>
                        </div>
                        <div className='col-4 d-flex justify-content-end'>
                            <TeamModal />
                        </div>
                     </div>
                    <DataSection title={'Team'} item={'Member'} tableHeadings={['Name','Email','Phone']} />
                </div>
                <div className='col-12 col-md-8 d-none d-sm-block container-fluid py-3 mt-5 border border-2 rounded-3' style={{boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)'}}>
                    <div className='row m-2 d-flex justify-content-between'>
                        <div className='col-6 d-flex'>
                            <h3>Tickets</h3>
                        </div>
                        <div className='col-4 d-flex justify-content-end'>
                            <TicketModal />
                        </div>
                     </div>
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