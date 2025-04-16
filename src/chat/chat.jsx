import React, { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import "./chatstyles.css";

export function Chat({user}) {


    const url = "https://api.chucknorris.io/jokes/random?category=dev";
    const [quote, setQuote] = useState(null);

    useEffect(() => {
      fetch('https://api.chucknorris.io/jokes/random?category=dev')
        .then((res) => res.json())
        .then((data) => {
          console.log(data); 
          setQuote(data);    
        })
        .catch((err) => console.error("API error:", err));
    }, []);
    

        const navigate = useNavigate();
      
        function logout() {
          fetch(`/api/auth/logout`, {
            method: 'delete',
          })
            .catch(() => {
              // Logout failed. Assuming offline
            })
            .finally(() => {
              localStorage.removeItem('userName');
              navigate("/");
            //   props.onLogout();
            });
        }

      


    const [message, setMessage] = React.useState("");
    const [fakemessage, setFakeMessage] = React.useState("");// Remove at later deliverable
    const [chatHistory, setChatHistory] = React.useState(()=>{
        return localStorage.getItem("chatHistory") || "";
    });

    useEffect(() => {
        const intervalId = setInterval(()=>{
        const userName = `User-${Math.floor(Math.random() * 100)}`;
        setChatHistory(prevHistory => prevHistory+`(${userName})-Hello! This is ${userName}\n`)
      }, 5000);
      return()=>{
        clearInterval(intervalId);
      };
    }, []);
    

    useEffect(()=>{
        localStorage.setItem("chatHistory", chatHistory);
    }, [chatHistory]);

    function messageChange(m){
        setMessage(m.target.value);
    }
    
    function sendMessage(s){
        s.preventDefault();
        if (message == "clearmessages" || message == "\"clearmessages\""){
            setChatHistory("")
            localStorage.setItem("chatHistory", "");
        }
        else{
            setChatHistory(prevHistory => prevHistory + `(${user})- ${message}\n`);
        }
        setMessage("");
    }

    const [joke, setJoke] = React.useState("Loading...");
    React.useEffect(() => {
        setJoke("What do you give a sick lemon? - Lemonaid!")
    }, []);
    

  return (
    <main className="container-fluid bg-secondary text-center">
        <title>CWF Chat</title>
            <p>Welcome back, {user}!</p>
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
                    <tr><th>Add Friend: </th><th><input type="text" id="friendname" placeholder="Enter Friend Name"></input></th></tr>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
            <div>
                {/* <img id="chatbox" src="Chat window example.png" style={{width: "500px", height:"250px"}}></img> */}

                <textarea class="messagearea"  placeholder="Start chatting!" value = {chatHistory} readOnly = {true}></textarea>
            </div>

            <br/>

            <form id="chatbox">
                <input type="text" value = {message} onChange = {messageChange} ></input>
                <button type="submit" className="btn btn-primary" onClick = {sendMessage}>Send</button>
            </form>
            <div>(type "clearmessages" in the text box to reset the chat window. ) 
            <button type="submit" className="btn btn-primary" onClick = {() => logout()}>Log out</button>
            
            </div>


            <ul id="jokebox">
            <div>A joke just for you!</div>
            {quote ? (
            <div className="quote-box">
                <p>"{quote.value}"</p>
                <p><em>— {quote.author}</em></p>
            </div>
            ) : (
            <p>Loading quote...</p>
            )}
                
                
                {/* <p>Joke of the day:</p>
                <li>Knock Knock:</li>
                <li>Who's there?</li>
                <li>Tank</li>
                <li>Tank who?</li>
                <li>You're welcome!</li> */}
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