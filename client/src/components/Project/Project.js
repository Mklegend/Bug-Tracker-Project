import React, { useState, useEffect } from 'react'
import TicketInfo from '../TicketInfo/TicketInfo'
import { TeamModal } from '../TeamModal/TeamModal'
import { TicketModal } from '../TicketModal/TicketModal'
import SideBar from '../Sidebar/SideBar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import DataSection from '../DataSection/DataSection'

function Project(props) {
    const [showTicketInfo, setShowTicketInfo] = useState(true);
    const [projectData, setProjectData] = useState([]);
    const [ticketData, setTicketData] = useState([]);
    const [reload, setReload] = useState(false);
    

    const { project } = useParams();

    useEffect(() => {
        loadData();
    }, [])

    async function loadData() {
        let x = await axios.get("http://localhost:8000/project/searchproject", { params:{name: project }})
        setProjectData(x.data);

        x = await axios.get("http://localhost:8000/gtickets/searchgticket", {params: {name: x.data[0].name}})
        setTicketData(x.data);
        setReload(true)
        console.log(x.data);
    }

    return (<>
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
                        <DataSection tableHeadings={['Name', 'Email', 'Phone']} data={projectData} projectName={projectData.name} />
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
                        <DataSection tableHeadings={['Ticket Title', 'Description', 'Ticket Author']} data={ticketData} projectName={'Ticket Title'} isTicket={true}/>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                {
                    showTicketInfo ? <TicketInfo /> : <></>
                }
            </div>
        </div>
    </>);
}

export default Project;