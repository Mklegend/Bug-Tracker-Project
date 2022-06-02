import React, { Component } from 'react'
import DataSection from '../DataSection/DataSection'
import TicketInfo from '../TicketInfo/TicketInfo'
import { TeamModal } from '../TeamModal/TeamModal'
import { TicketModal } from '../TicketModal/TicketModal'
import SideBar from '../Sidebar/SideBar'


export default class Project extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showTicketInfo: true
        }
    }
    render() {

        return (
            <>
                <SideBar />
                <div className='container-fluid'>
                    <div className='container-fluid px-0 mt-5'>
                        <h2 className='fw-bold' style={{ color: 'navy' }}>PROJECT</h2>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-3'>
                            <h3 className='fw-bold' style={{ color: 'navy' }}>{'Bug Tracker'}</h3>
                        </div>
                        <div className='col-9 d-flex justify-content-center'>
                            <h4 className='fw-bold' style={{ color: 'navy' }}>{'Project Management Tool to track bugs,issues etc'}</h4>
                        </div>
                    </div>
                    <div className='container-fluid'>
                        <div className='container d-md-flex'>
                            <div className='col-12 me-md-3 col-md-4 d-none d-sm-block container-fluid py-3 mt-5 border border-2 rounded-3' style={{ boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)' }}>
                                <div className='row m-2 d-flex justify-content-between'>
                                    <div className='col-6 d-flex'>
                                        <h3>Team</h3>
                                    </div>
                                    <div className='col-4 d-flex justify-content-end'>
                                        <TeamModal />
                                    </div>
                                </div>
                                <DataSection prj={false} title={'Team'} item={'Member'} tableHeadings={['Name', 'Email', 'Phone']} tableEntries={['johndoe@gmail.com', '+920300303']} projectName={'John Doe'} />
                            </div>
                            <div className='col-12 col-md-8 d-none d-sm-block container-fluid py-3 mt-5 border border-2 rounded-3' style={{ boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)' }}>
                                <div className='row m-2 d-flex justify-content-between'>
                                    <div className='col-6 d-flex'>
                                        <h3>Tickets</h3>
                                    </div>
                                    <div className='col-4 d-flex justify-content-end'>
                                        <TicketModal />
                                    </div>
                                </div>
                                <DataSection prj={false} title={'Tickets'} tableHeadings={['Ticket Title', 'Description', 'Ticket Author']} item={'Ticket'}
                                    tableEntries={['Ticket Description', 'Ticket Author']} projectName={'Ticket Title'} />
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid'>
                        {
                            this.state.showTicketInfo ? <TicketInfo /> : <></>
                        }
                    </div>
                </div>
            </>
        )
    }
}