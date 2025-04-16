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
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");


  function usernameChange(u){
    setUsername(u.target.value);
  }
  function passwordChange(p){
    setPassword(p.target.value);
  }
//--------------------------------------------------------------------


  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }
  


  


  // function loginUser(){
  //   if (username == ""){
  //     alert ("Enter a username")  
  //   }
  //   else if (password == ""){
  //     alert("Enter a password")
  //   }
  //   else{
  //     localStorage.setItem("username", username)
  //     localStorage.setItem("password", password);
  //     setUser(username); 
  //     navigate ("/chat");
  //   }
  // }


  async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      email: email,
      password: passwordHash,
      token: uuid.v4(),
    };
    users.push(user);
  
    return user;
  }
  
  async function findUser(field, value) {
    if (!value) return null;
  
    return users.find((u) => u[field] === value);
  }
  
  





  // function createUser() {
  //   if (username == ""){
  //     alert ("Enter a username")  
  //   }
  //   else if (password == ""){
  //     alert("Enter a password")
  //   }
  //    else {
  //     localStorage.setItem("username", username);
  //     localStorage.setItem("password", password);
  //     setUser(username);
  //     navigate("/chat");
  //   }
  // }


  //--------------------------------------------------------------------


  return (
    <main className="container-fluid bg-secondary text-center">
        <title>CWF Login</title>
        <div className="form-group">
            <h2>Log in</h2>
            <br/>
            
                {/* <form method="get" action="chat.html"> */}
                <label>Username:</label>
                <input type="text" id="username" name="username" onChange = {usernameChange}></input>
            
                <br/>
                
                <label>Password:</label>
                <input type="text" id="passwordbox" onChange = {passwordChange}/>
                <button type="submit" className="btn btn-primary" onClick = {loginOrCreate}>Log in</button>
                <button type="submit" className="btn btn-primary" onClick={createUser}>Create Account</button>


                <br/>
                {/* <p>(First time? Just enter the username and password you'd like to use going forward!)</p> */}

            {/* </form> */}

            {/* <button onClick={countClick}>Count</button>
            <div>{count}</div>
            <div>{msg}</div> */}

    
            {/* <div>
              <input type="text" onChange={passwordChange} />
              <button onClick={loginUser}> login</button>
              </div> */}
            
        </div>
    </main>
  );
}
