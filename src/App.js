import "./App.css";
import Navbar from "./components/Navbar";
import {  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Privateroute from "./components/Privateroute";
import { useState } from "react";


function App() {

  const[isloggedIn,setloggedIn]=useState(false)
  
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col" >
      <Navbar isloggedIn={isloggedIn} setloggedIn={setloggedIn}/>
      <Routes>
                <Route path="/" element={<Home isloggedIn={isloggedIn}/>}/>
                <Route path="login" element={<Login setloggedIn={setloggedIn}/>}/>
                <Route path="signup" element={<Signup setloggedIn={setloggedIn}/>}/>
                <Route path="Dashboard" element={
                  <Privateroute isloggedIn={isloggedIn}>
                    <Dashboard/>
                  </Privateroute>
                
                }/>
      </Routes>
    </div>
  );
}

export default App;
