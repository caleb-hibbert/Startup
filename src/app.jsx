import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Chat } from './chat/chat';


export default function App() {
  return (
    <BrowserRouter>
  <div className="body bg-dark text-light">
  
  
  <header>

    <h2> Chatting with friends! {" "} 
        <img src= "https://upload.wikimedia.org/wikipedia/commons/d/d1/Bubbles-alt-icon.png" style={{width: "50px", height: "50px"}}/>
    </h2>


    <menu className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="chat.html">
                Chat
              </a>
            </li>
          </menu>

        {/* <title>CWF Login</title>
        <link rel="stylesheet" href="indexstyles.css" />
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/d/d1/Bubbles-alt-icon.png"/>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"> */}

    </header>


    <main>App components go here</main>
  
  
  
  
  
    <footer>
            <span>Creator: Caleb Hibbert</span> <br/>
            <nav>
                <a class="link" href="https://github.com/caleb-hibbert/Startup">Github</a>
            </nav>
        </footer>
  
  
  
  
  
  </div>
  </BrowserRouter>
  );
}