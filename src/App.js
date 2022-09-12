import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpage from "./loginpage";
import Register from "./register";
import Reset from "./Reset";
import Privacypolicy from "./Privacypolicy";
import Password from "./Password";
import Wrapper from './Wrapper';
import Dashboard from './Dashboard';
import Cvdetail from './Cvdetail';
import Theme from './Theme';
import About from './About';
import Dashboardwrapper from './Dashboard-components/Dashboardwrapper';
import ModalForObj from './Modals/ModalForObj';

function App() {
  const val = {
    name : "Name of User",
    position : "Job/Position",
    description : "Discription Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore laboriosam velit, libero voluptates facilis autem! Pariatur placeat, eligendi dolore iure officiis quos, exercitationem accusantium aspernatur reprehenderit possimus, sed culpa?",
    email : 'example@email.com',
    phone : 'Phone Number',
    linkedin : 'LinkedIn'
};
  return (
    <Router>
      <div className='min-h-screen bg-red-50'>
      <Routes>
        <Route path="/" element={<Wrapper><Loginpage /></Wrapper>} />
        <Route path="/register" element={<Wrapper><Register /></Wrapper>}/>
        <Route path="/reset-pass" element={<Wrapper><Reset /></Wrapper>}/>
        <Route path="/privacypolicy" element={<Wrapper><Privacypolicy /></Wrapper>}/>
        <Route path="/password:uuid" element={<Wrapper><Password/></Wrapper>}/>
        <Route path='/dashboard' element={<Dashboard />} >
                        <Route path="" element={<Dashboardwrapper />} />
                        <Route path="themes" element={<Theme />} />
                        <Route path="about" element={<About />} />
        </Route>
        <Route path='/cv-details' element={<Wrapper><Cvdetail /></Wrapper>}/>
        <Route path='/comp' element={<ModalForObj content={val} />}/>
        <Route path='/preview' element={<Dashboardwrapper />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
