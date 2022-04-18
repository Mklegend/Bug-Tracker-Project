import './App.css';
import { SignUp } from '../SignUp/SignUp';
import { LogIn } from '../LogIn/login';
import ProjectSection from '../ProjectSection/ProjectSection';
import SideBar from '../Sidebar/SideBar';
import Dashboard from '../Dashboard/Dashboard';


function App() {
  return (
     <div className='container-fluid d-md-flex' style={{minHeight:'100vh'}}>
       <SideBar />
       <Dashboard />
     </div>
  );
}

export default App;
