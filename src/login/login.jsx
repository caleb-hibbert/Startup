import React, { useEffect, useState } from 'react';
export function Login({setUser}) {

  const [count, setCount] = React.useState(parseInt(localStorage.getItem('count')) || 0);
  function countClick(){
    setCount(count + 1);
    localStorage.setItem('count', count+1);
  }
  const [text, setText] = React.useState("");
  function loginUser(){
    // console.log("login"+ text);
    localStorage.setItem("user", text);
    setUser(text);
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

    
            <div>
              <input type="text" onChange={textChange} />
              <button onClick={loginUser}> login</button>
              
              </div>
            
        </div>
    </main>
  );
}
