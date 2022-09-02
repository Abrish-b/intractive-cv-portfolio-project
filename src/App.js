import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpage from "./loginpage";
import Register from "./register";
import Reset from "./Reset";
import Privacypolicy from "./Privacypolicy";
import Password from "./Password";
import Wrapper from './Wrapper';
import Dashboard from './Dashboard';


function App() {
  return (
    <Router>
      <div className='min-h-screen bg-red-50'>
      <Routes>
        <Route path="/" element={<Wrapper><Loginpage /></Wrapper>} />
        <Route path="/register" element={<Wrapper><Register /></Wrapper>}/>
        <Route path="/reset-pass" element={<Wrapper><Reset /></Wrapper>}/>
        <Route path="/privacypolicy" element={<Wrapper><Privacypolicy /></Wrapper>}/>
        <Route path="/password:uuid" element={<Wrapper><Password/></Wrapper>}/>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
