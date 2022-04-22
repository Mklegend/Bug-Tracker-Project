import './App.css';
import SideBar from '../Sidebar/SideBar';
import Dashboard from '../Dashboard/Dashboard';
import Project from '../Project/Project';
import TicketSection from '../TicketSection/TicketSection';
import Admin from '../Admin/Admin';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {LogIn} from '../LogIn/login'

function App(props) {
  return (
     <div className='container-fluid d-md-flex' style={{minHeight:'100vh'}}>
       <Router> 
          <Routes>
              <Route exact path='/' element={<Dashboard />}></Route>
              <Route exact path='/tickets' element={<TicketSection />}></Route>
              <Route exact path='/admin' element={<Admin />}></Route>
              <Route exact path='/signin' element={<LogIn />}></Route>
              <Route exact path='/bugtracker' element={<Project />}></Route>
            </Routes>
       </Router>
     </div>
  );
}

export default App;
