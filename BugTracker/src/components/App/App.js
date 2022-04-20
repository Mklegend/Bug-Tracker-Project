import './App.css';
import SideBar from '../Sidebar/SideBar';
import Dashboard from '../Dashboard/Dashboard';
import Project from '../Project/Project';
import TicketStatsSection from '../TicketStatsSection/TicketStatsSection';
import TicketSection from '../TicketSection/TicketSection';
import Admin from '../Admin/Admin';


function App() {
  return (
     <div className='container-fluid d-md-flex' style={{minHeight:'100vh'}}>
       <SideBar />
        {/* <Dashboard /> */}
        <Project title={'Bug Tracker'} desc={'Project Description'} />
        {/* <TicketSection /> */}
        {/* <Admin /> */}
     </div>
  );
}

export default App;
