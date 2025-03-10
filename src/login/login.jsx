import React, { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
export function Login({setUser}) {

  const [count, setCount] = React.useState(parseInt(localStorage.getItem('count')) || 0);
  const navigate = useNavigate();
  const [msg, setMsg] = React.useState("...listening");

  function countClick(){
    setCount(count + 1);
    localStorage.setItem('count', count+1);
  }

  React.useEffect(() =>{
    setInterval(() => {
      const names = ["bob", "sue", "tia"];
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomCount = Math.floor(Math.random() * 100) + 1;
      const newMsg = `${randomName}: ${randomCount}`;
      setMsg(newMsg);

    }, 4000);
  })

  const [text, setText] = React.useState("");
  function loginUser(){
    localStorage.setItem("user", text);
    setUser(text);
    navigate ("/chat");
  }
  function textChange(e){
    setText(e.target.value);
  }

  return (
    <main className="container-fluid bg-secondary text-center">
        <title>CWF Login</title>
        <div className="form-group">
            <h2>Log in</h2>
            <br/>
            
                <form method="get" action="chat.html">
                <label>Username:</label>
                <input type="username" id="username" name="username"></input>
            
                <br/>
                
                <label>Password:</label>
                <input type="text" id="passwordbox" name="varPassword" />
                <button type="submit" className="btn btn-primary">Submit</button>

                <br/>
                <p>(First time? Just enter the username and password you'd like to use going forward!)</p>
            </form>
            <button onClick={countClick}>Count</button>
            <div>{count}</div>
            <div>{msg}</div>

    
            <div>
              <input type="text" onChange={textChange} />
              <button onClick={loginUser}> login</button>
              
              </div>
            
        </div>
    </main>
  );
}
