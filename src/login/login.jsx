import React from 'react';
export function Login() {
  return (
    <main className="container-fluid bg-secondary text-center">
        <div className="form-group">
            <h2>Log in</h2>
            <br/>
            {/* <div> */}
                <form method="get" action="chat.html">
                <label for="username">Username:</label>
                <input type="username" id="username" name="username"></input>
            {/* </div> */}
                <br/>
                <label for="password:">Password:</label>
                <input type="password" id="passwordbox" name="varPassword" />
                <button type="submit" className="btn btn-primary">Submit</button>
                <br/>
                <p>(First time? Just enter the username and password you'd like to use going forward!)</p>
            </form>
            
        </div>
    </main>
  );
}