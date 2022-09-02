import logo from "./Assets/logo-removebg-preview.png"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpage from "./loginpage";
import Register from "./register";
import Reset from "./Reset";
import Privacypolicy from "./Privacypolicy";
import Password from "./Password";


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-center items-center bg-red-50">
      <img className="max-w-sm my-4" src={logo} alt="logo"/>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/reset-pass" element={<Reset />}/>
        <Route path="/privacypolicy" element={<Privacypolicy />}/>
        <Route path="/password:uuid" element={<Password/>}/>
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
