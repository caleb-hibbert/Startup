// import React from 'react';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { Login } from './login/login';
import { Chat } from './chat/chat';


export default function App() {
  const [user, setUsernameText] = React.useState(localStorage.getItem("user") || null);
  
  return (
    <BrowserRouter>
  <div className="body bg-dark text-light">
  
  
  <header>
  
    <h2> Chatting with friends! {" "} 
        <img src= "https://upload.wikimedia.org/wikipedia/commons/d/d1/Bubbles-alt-icon.png" style={{width: "50px", height: "50px"}}/>
    </h2>

    <menu className="navbar-nav">
        <li className="nav-item">
            <NavLink className="nav-link" to="">Login</NavLink>
        </li>
        <li className="nav-item">
            { user && <NavLink className="nav-link" to="chat">Chat (Logged in as: {user})</NavLink>}
        </li>
        
        
    </menu>

        {/* <title>CWF Login</title>
        <link rel="stylesheet" href="indexstyles.css" />
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/d/d1/Bubbles-alt-icon.png"/>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"> */}

    </header>


    <Routes>
        <Route path='/' element={<Login setUser={setUsernameText}/>} exact />
        <Route path='/chat' element={<Chat user = {user}/>} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  
  
    <footer>
        <span>Creator: Caleb Hibbert</span> <br/>
        <nav>
            <NavLink className="link" to="https://github.com/caleb-hibbert/Startup">Github</NavLink>
        </nav>
    </footer>
  
  
  
  
  
  </div>
  </BrowserRouter>
  );
}


function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}