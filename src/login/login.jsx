import React from 'react';
export function Login() {

  const [count, setCount] = React.useState(0);

  function countClick(){
    setCount(count+1);
  }
  
  return (
    <main className="container-fluid bg-secondary text-center">
        <title>CWF Login</title>
        <div className="form-group">
            <h2>Log in</h2>
            <br/>
            
                <form method="get" action="chat.html">
                <label for="username">Username:</label>
                <input type="username" id="username" name="username"></input>
            
                <br/>
                
                <label for="password:">Password:</label>
                <input type="password" id="passwordbox" name="varPassword" />
                <button type="submit" className="btn btn-primary">Submit</button>
                <br/>
                <p>(First time? Just enter the username and password you'd like to use going forward!)</p>
            </form>
            <button onClick={countClick}>Count</button>
            <div>{count}</div>
            
        </div>
    </main>
  );
}
