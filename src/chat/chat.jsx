import React from 'react';
import "./chatstyles.css";

export function Chat() {
  return (
    <main className="container-fluid bg-secondary text-center">
        <title>CWF Chat</title>
            <p>Welcome back, Caleb!</p>
            <h3> Talking to: Adam</h3>

            <div id="friendlistplusbox">
                <table id="friendlist">
                <tr>
                    <th>Friends</th>
                    <th></th>
                    <th>Active?</th>
                </tr>
                <tr><th>Adam</th> <th></th><th>Yes</th></tr>
                <tr><th>Jill</th> <th></th><th>No</th></tr>
                <tr><th>Maxwell</th> <th></th><th>Yes</th></tr>

                </table>
                <br/>
                <form>
                    <tr><th>Add Friend: </th><th><input type="text" id="friendname" name="friendname" placeholder="Enter Friend Name"></input></th></tr>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
            <div>
                <img id="chatbox" src="Chat window example.png" style={{width: "500px", height:"250px"}}></img>
            </div>
            <br/>
            <form id="messageboxandsend">
                <input type="text" id="message" name="message" placeholder="Enter your message here"></input>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>

            <ul id="jokebox">
                <p>Joke of the day:</p>
                <li>Knock Knock:</li>
                <li>Who's there?</li>
                <li>Tank</li>
                <li>Tank who?</li>
                <li>You're welcome!</li>
            </ul>
            <nav id="returntologinpage">
                {/* <form method="get" action="index.html">
                    <label for="returntologinpage:">Return to login page?</label>
                    <button type="submit" className="btn btn-primary">Log out</button>
                </form> */}
            </nav>
            
        </main>
  );
}