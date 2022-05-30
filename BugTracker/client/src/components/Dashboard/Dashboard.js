import React from 'react'
import DataSection from '../DataSection/DataSection'
import TicketStatsSection from '../TicketStatsSection/TicketStatsSection'
import { ProjectModal } from '../ProjectModal/ProjectModal'
import SideBar from '../Sidebar/SideBar'

export default function Dashboard() {
    return (
        <>
            <SideBar />
            <div className='container-fluid' style={{ background: "linear-gradient(white, white)" }}>
                <div className='container-fluid mt-5'>
                    <h2 className='fw-bold' style={{ color: 'navy' }}>Dashboard</h2>
                </div>
                <div className='col-12 d-none d-sm-block container-fluid py-3 mt-5 border border-2 rounded-3' style={{ boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)' }}>
                    <div className='row m-2 d-flex justify-content-between'>
                        <div className='col-6 d-flex'>
                            <h3>Projects</h3>
                        </div>
                        <div className='col-4 d-flex justify-content-end'>
                            <ProjectModal />
                        </div>
                    </div>
                    <DataSection prj={true} title={'Team'} item={'Member'} tableHeadings={['Name', 'Description', 'Team Lead']} tableEntries={['john@gmail.com', '+9203030300303']} projectName={'Bug Tracker 1.0'} />
                </div>
                <TicketStatsSection />
            </div>
        </>
    )
}
