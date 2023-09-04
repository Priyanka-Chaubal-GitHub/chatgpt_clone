import React, { useState } from 'react';
import "./App.css"; 
import gptlogo from "./assets/chatgpt.svg";
import addbtn from "./assets/add-30.png";
import messageicon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendbtn from "./assets/send.svg";
import usericon from "./assets/user-icon.png";
import gptimage from "./assets/chatgptLogo.svg";
import {sendMsgToOpenAI} from './openai';
// import {useState} from 'react';

function App() {
  // const [input, setInput] = useState("");

  // const handleSend = async() => {
  //   const res = await sendMsgToOpenAI(input);
  //   console.log(res);
  // }
  return (
    <div className="App">
      <div className="sidebar">

        <div className="upperSide">
          <div className="upperSideTop">
            <div className='brand'><img src={gptlogo} className='logo' />ChatGPT</div>
            <button className='midBtn'><img src={addbtn} className='addBtn' />New Chat</button>
            <div className='upperSideBottom'>
            <button className='query'><img src={messageicon} className='' />What is programming?</button>
            <button className='query'><img src={messageicon} className='' />How to use an API?</button>
            </div>
          </div>
        </div>

        <div className="lowerSide">
          <div className='listitems'><img src={home} className='lisitemsimg'/>Home</div>
          <div className='listitems'><img src={saved} className='lisitemsimg'/>Saved</div>
          <div className='listitems'><img src={rocket} className='lisitemsimg'/>Upgrade to Pro</div>
        </div>
      </div>
      <div className="main">
      <div className="chats">
      <div className="chat">
      <img className='chatimg' src={usericon} /><p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         </div>
         <div className="chat bot">
      <img className='chatimg' src={gptimage} /><p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         </div>  
        </div>
      <div className="chatFooter">
      <div className="inp">
        <input type="text" placeholder='Send a message' /><button className='send'>
        <img src={sendbtn} />
        </button>
          </div>
          <p>This is Clone ChatGPT , It may produce incorrect result.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
