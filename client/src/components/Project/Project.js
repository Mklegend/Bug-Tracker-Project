import React, { useState, useEffect } from 'react'
import TicketInfo from '../TicketInfo/TicketInfo'
import { TeamModal } from '../TeamModal/TeamModal'
import { TicketModal } from '../TicketModal/TicketModal'
import SideBar from '../Sidebar/SideBar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import DataSection from '../DataSection/DataSection'
import DataSectionUser from '../DataSection/DataSectionUser'

function Project(props) {
    const [showTicketInfo, setShowTicketInfo] = useState(true);
    const [projectData, setProjectData] = useState([]);
    const [ticketData, setTicketData] = useState([]);
    const [members, setMembers] = useState([])
    const [reload, setReload] = useState(false);
    const [activeTicket, setActiveTicket] = useState()
    const [showActiveTicket, setShowActiveTicket] = useState("false");
    

    const { project } = useParams();

    useEffect(() => {
        loadData();
    }, [])

    async function loadData() {
        //Getting Project info
        let x = await axios.get("http://localhost:5000/project/searchproject", { params:{name: project }})
        setProjectData(x.data);

        //Getting all tickets
        let y = await axios.get("http://localhost:5000/gtickets/searchgticket", {params: {name: x.data[0].name}})
        setTicketData(y.data);
        setReload(true)
        console.log(y.data);

        //Getting team info
        let z = await axios.get("http://localhost:5000/users/searchuser", {params: {name: x.data[0].lead}})
        console.log(z.data)
        setMembers(z.data)
    }

    const ticketSetter = async (ticketName) => {
        let ticket = await axios.get("http://localhost:5000/gtickets/getgticket", {params: {name: ticketName}});
        setActiveTicket(ticket.data);
        setShowActiveTicket(true);
        console.log("Im here with ticket: ")
        console.log(ticket.data)
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
                        <DataSectionUser tableHeadings={['Name', 'Email', 'ID']} data={members} projectName={projectData.name} />
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
                        <DataSection tableHeadings={['Ticket Title', 'Description', 'Ticket Author']} data={ticketData} projectName={'Ticket Title'} isTicket={true} callback={ticketSetter}/>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                {
                    showTicketInfo ? <TicketInfo ticket={activeTicket} show={showActiveTicket}/> : <></>
                }
            </div>
        </div>
    </>);
}

export default Project;