import { useState } from 'react'
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';

import './App.css'

function App(){
          
          const [chatMessages,setChatMessages] = useState([{
            message:"Hello Chatbot",
            sender:"user",
            id:crypto.randomUUID()
          },{
            message:"How can I help You?",
            sender:"robot",
            id:crypto.randomUUID()
          },{
            message:"can you get me todays date?",
            sender:"user",
            id:crypto.randomUUID()
          },{
            message:"Today is November 27",
            sender:"robot",
            id:crypto.randomUUID()
          }]);
          
          //const[chatMessages,setChatMessages]=array;
          //const chatMessages=array[0];
          //const setChatMessages=array[1];


          return(
            <div className="app-container">

                <ChatMessages 
                  chatMessages={chatMessages}
                />
                <ChatInput 
                  chatMessages={chatMessages}
                  setChatMessages={setChatMessages}
                />
            </div>
          );
          
}

export default App
