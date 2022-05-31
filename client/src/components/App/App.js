import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Project from '../Project/Project';
import TicketSection from '../TicketSection/TicketSection';
import Admin from '../Admin/Admin';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {LogIn} from '../LogIn/login'
import {SignUp} from '../SignUp/SignUp'

function App(props) {
  return (
     <div className='container-fluid d-md-flex' style={{minHeight:'100vh'}}>
       <Router> 
          <Routes>
              <Route exact path='/dashboard' element={<Dashboard />}></Route>
              <Route exact path='/tickets' element={<TicketSection />}></Route>
              <Route exact path='/admin' element={<Admin />}></Route>
              <Route exact path='/' element={<LogIn />}></Route>
              <Route exact path='/bugtracker' element={<Project />}></Route>
              <Route exact path='/signup' element={<SignUp />}></Route>
            </Routes>
       </Router>
     </div>
  );
}

export default App;
